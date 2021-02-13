import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from './../student-service.service';
@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.css']
})
export class RegulationComponent implements OnInit {
  public products: any[];
  public x:any;
  public y: any;
  constructor(private service: StudentServiceService) { }
  //message : string = "hii";
  ngOnInit() {

  }
  OnSubmit(value : any) {
    console.log(value);
    this.service.getProducts(value).subscribe((data: any) => {
      console.log(data); 
      this.products = data;
      this.x = "click here to view";
      this.y = "r";
      //this.produ = data; 
     }
  );
  }
}
