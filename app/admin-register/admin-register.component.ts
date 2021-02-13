import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css','./css/style.css','./fonts/material-icon/css/material-design-iconic-font.css','./fonts/material-icon/css/material-design-iconic-font.min.css']
})
export class AdminRegisterComponent implements OnInit {
  organizer: any;
  constructor(private service: StudentServiceService, private router: Router, private notifyService : NotificationService) {
    this.organizer = {organizerId: '', organizerName: '', organizerEmail: '', organizerPassword: '',
    };
  }

  ngOnInit(): void {
  }

  register(): void {
    this.service.registerOrganizer(this.organizer).subscribe((result: any) => {console.log(result);});
}
}
