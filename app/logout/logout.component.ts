import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from './../student-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private service: StudentServiceService) { 

  }

  ngOnInit(): void {

    localStorage.removeItem("regdNo");
      localStorage.removeItem("emailId");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("yearOfStudy");
      localStorage.removeItem("password");
      localStorage.removeItem("collegeName");
      localStorage.removeItem("about");
      localStorage.removeItem("studentImg");
      localStorage.removeItem("phone");
      this.service.setUserLoggedOut();
      this.router.navigate(['login']);
      
  }

}
