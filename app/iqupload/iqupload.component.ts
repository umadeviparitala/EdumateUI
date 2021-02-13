import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-iqupload',
  templateUrl: './iqupload.component.html',
  styleUrls: ['./iqupload.component.css']
})
export class IquploadComponent implements OnInit {
  interview: any;
  constructor(private service: StudentServiceService, private notifyService : NotificationService) {
    this.interview = {companyName:'',questionName:'', description:'', testCases:'',explanation:''};
    this.interview.companyName = '';
    this.interview.questionName = '';
    this.interview.description = '';
    
  }

  ngOnInit(): void {
  }

  register(): void {
    this.service.registerQuestion(this.interview).subscribe((result: any) => { console.log(result); } );
    this.notifyService.showSuccess("Successful !!", "File Upload");
    //console.log(this.interview);
  }
}
