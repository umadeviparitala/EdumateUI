import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','./css/style.css','./css/bootstrap.min.css','./scss/style.scss'],
  

})
export class MainComponent implements OnInit {
  navi: any;
  img: any = localStorage.getItem("studentImg");
  firstName: String = localStorage.getItem("firstName");
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }
  regulation() {
    this.router.navigate['regulation'];
  }

}
