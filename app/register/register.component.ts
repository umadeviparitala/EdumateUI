import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./css/style.css','./fonts/material-icon/css/material-design-iconic-font.css','./fonts/material-icon/css/material-design-iconic-font.min.css']
})
export class RegisterComponent implements OnInit {

  student: any;
  constructor(private service: StudentServiceService, private router: Router) {
    this.student = {regdNo: '', firstName: '', lastName: '', emailId: '', password: '', yearOfStudy: '',
    };
  }

  ngOnInit(): void {
  }

  register(): void {
    this.service.registerStudent(this.student).subscribe((result: any) => { console.log(result); } );
    this.router.navigate(['login']);
    console.log(this.student);
  }

}
