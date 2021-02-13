import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

declare var jQuery: any;

@Component({
  selector: 'app-adminf',
  templateUrl: './adminf.component.html',
  styleUrls: ['./adminf.component.css']
})
export class AdminfComponent implements OnInit {
  displayq: any;
  allQ: any;
  allRep:any;
  updateObj: any;
  user: String = localStorage.getItem("firstName");
  constructor(private service: StudentServiceService) {
    this.displayq = {quesId: '', question: '', userName: ''};
    this.updateObj = {quesId: '', aId: '', reply: ''};
    this.updateObj.userName = localStorage.getItem("firstName");
    this.allRep = {reply:'',userName:''};
  }

  replytoq(task: any) {
    this.displayq = task;
    this.updateObj.quesId = task.quesId;
		jQuery('#replyPopup').modal('show'); //invoking popup
	
		console.log("inside edit fnc" + JSON.stringify(task));
    }
    
    Reply() {
      console.log(this.updateObj);
      this.service.replya(this.updateObj).subscribe((result: any) => {console.log(result)});
      jQuery('#editPopup').modal('hide');
      //console.log(this.updateObj);
      }
showrep(q :any) {
  jQuery('#showPopup').modal('show'); //invoking popup
  console.log(q.quesId);
  this.service.showAllRep(q.quesId).subscribe( (data: any) => {console.log(data); this.allRep = data; })
}
  ngOnInit(): void {
   // console.log("in onit");
    this.service.getAllfQ().subscribe( (data: any) => {this.allQ = data; });
   setTimeout(() => { this.ngOnInit() }, 1000 * 3)
  }

  qSubmit(q: any){
    this.service.qSubmit(q, this.user).subscribe( (data: any) => {console.log(data); this.displayq = data; });
  }
}

