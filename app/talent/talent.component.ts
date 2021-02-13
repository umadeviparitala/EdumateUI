import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;
@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {
//jQuery:any;
updateObj:any;
company: String;
//username:String;
constructor(private service: StudentServiceService, private route: ActivatedRoute) {
  this.updateObj = {companyName:'',questionName:'', description:'', testCases:'',explanation:''};
 }
displayq:any;
ngOnInit(): void {
  this.route.queryParams.subscribe( 
    params => { 
      this.company =  params['company']; 
      // this.language=params['language']; 
    } 
  ) 
  
  this.service.getAllQuestions().subscribe( (data: any) => {console.log(data); this.displayq = data; });
}
editTask(question:any){
  this.updateObj = question;
  console.log(this.updateObj);
  jQuery('#editPopup').modal('show');
 // console.log('inside edit function' + JSON.stringify(question));
}

}
