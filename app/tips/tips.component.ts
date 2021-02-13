import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  Talent: String = "TalentSprint";
  cater: String = "Caterpillar";
  expedia: String = "Expedia";
  google: String = "Google";
  amazon: String = "Amazon";
  flip: String = "Flipkart";
  ibm: String = "IBM";
  infosys: String = "Infosys";
  cap: String = "Capgemini";
  username: String;
  nav(val:any) :void {
    if(val="1") {
      this.username = "TalentSprint";
    }
    if(val="2") {
      this.username = "Caterpillar";
    }
    console.log(this.username);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
