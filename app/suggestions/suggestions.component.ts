import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from './../student-service.service';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  x:any;
  constructor(private service: StudentServiceService) { }

  ngOnInit(): void {
  }
  feedSubmit(value:any) {
    this.x = localStorage.getItem("emailId");
    this.service.feed(value,this.x).subscribe((result:any) => {console.log(result)});
  }
}