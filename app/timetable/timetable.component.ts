import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

declare var jQuery: any;

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit{

  public items = []; 

	/* A two-way binding performed which 
	pushes text on division */
  tasks: any;
  displayTasks: any;
  public updateObj: any;

  constructor(private service: StudentServiceService) {
	this.tasks = {event: '', date: '', time: '', regNo: ''};
	this.tasks.regNo = localStorage.getItem("regdNo");
	this.updateObj = {event: '', date: '', time: ''};
	this.updateObj.regNo = localStorage.getItem("regdNo");
	
		
		console.log(this.tasks);
	
  }
	/* When input is empty, it will 
	not create a new division */
	public addToList() { 
		this.tasks.regNo = localStorage.getItem("regdNo");
		this.service.addTask(this.tasks).subscribe((result: any) => { console.log(result); } );
		this.tasks.event = '';
		this.tasks.date = '';
		this.tasks.time = '';
	
    console.log(this.tasks);
	} 

	/* This function takes to input the 
	task, that has to be deleted*/

	editTask(task: any) {
		this.updateObj = task;
		jQuery('#editPopup').modal('show'); //invoking popup
	
		console.log("inside edit fnc" + JSON.stringify(task));
	  }

	  deleteTask(task: any) {
		  //console.log(task);
		this.service.deleteTask(task).subscribe((data: any) => {
		  const i = this.tasks.findIndex((element) => { return element.tid == task.tid;});
		  this.tasks.splice(i, 1);
		});
		console.log("inside delete fnc " + JSON.stringify(task));
	  }
	  

	ngOnInit() {
		this.service.getAllTasks(this.tasks.regNo).subscribe( (data: any) => {this.displayTasks = data; });
		setTimeout(() => { this.ngOnInit() }, 1000 * 1)
	  }
	/*getTasks(): void {
		console.log(this.tasks);
		this.service.getAllTasks(this.tasks.regNo).subscribe( (data: any) => {console.log(data); this.tasks = data; });
	}*/

	updateTask() {
		console.log(this.updateObj);
		this.service.updateTask(this.updateObj).subscribe((result: any) => {console.log(result)});
		jQuery('#editPopup').modal('hide');
		console.log(this.updateObj);
	  }

}
//this.service.updateTask(this.updateObj).subscribe((data: any) => {console.log(data)});