import { Component, OnInit } from '@angular/core';
import {
  ElementRef,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList
} from "@angular/core";

import { StudentServiceService } from '../student-service.service';
// import { CountUp } from './js/countUp.min.js';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit,AfterViewInit {

  constructor(private service: StudentServiceService){}
  title = localStorage.getItem("regdNo");
  count4:any;
  count1:any;
  count2:any;
  count3:any;
  nums: Array<number> = [25, 76, 48];

  @ViewChild("oneItem") oneItem: any;
  @ViewChildren("count") count: QueryList<any>;

  ngAfterViewInit() {
    this.animateCount();
  }

  ngOnInit(): void {
     this.service.getCountStudents().subscribe( (data: any) => {console.log(data);this.count4 = data;});
    this.service.getCountEbooks().subscribe( (data: any) => {console.log(data);this.count1 = data;});
    this.service.getCountItemDetails().subscribe( (data: any) => {console.log(data);this.count2 = data;});
    this.service.getCountInterviewQuestions().subscribe( (data: any) => {console.log(data);this.count3 = data;});
    console.log(this.count1);
    

  }
  animateCount() {
    let _this = this;

    let single = this.oneItem.nativeElement.innerHTML;

    this.counterFunc(single, this.oneItem, 7000);

    this.count.forEach(item => {
      _this.counterFunc(item.nativeElement.innerHTML, item, 2000);
    });
  }

  counterFunc(end: number, element: any, duration: number) {
    let range, current: number, step, timer;

    range = end - 0;
    current = 0;
    step = Math.abs(Math.floor(duration / range));

    timer = setInterval(() => {
      current += 1;
      element.nativeElement.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }

  

}
