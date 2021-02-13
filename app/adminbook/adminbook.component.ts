import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { StudentServiceService } from './../student-service.service';

@Component({
  selector: 'app-adminbook',
  templateUrl: './adminbook.component.html',
  styleUrls: ['./adminbook.component.css']
})
export class AdminbookComponent implements OnInit {
  imageUrl: string;
  fileToUpload: File = null;
  fileToUpload1: File=null;
  reader: FileReader;
  reader1: FileReader;
  z: string;
  constructor(private service: StudentServiceService, private notifyService : NotificationService) {
   // this.imageUrl = '/assets/images/flowers.jpg';
  }

  ngOnInit() {
  }

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    //this.fileToUpload1=file.item(1);
    this.reader = new FileReader();
    //this.reader1 = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    //this.reader1.readAsDataURL(this.fileToUpload1);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
  
  handleFileInpt(file: FileList){
   // this.fileToUpload = file.item(0);
    this.fileToUpload1=file.item(0);
   // this.reader = new FileReader();
    this.reader1 = new FileReader();
    //this.reader.readAsDataURL(this.fileToUpload);
    this.reader1.readAsDataURL(this.fileToUpload1);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
  OnSubmit(imageForm: any) {

    this.service.postFile1(imageForm, this.fileToUpload,this.fileToUpload1).subscribe (
      data => {
        console.log('done');
        this.z = "Uploaded";
       // this.imageUrl = '/assets/images/flowers.jpg';
      }
    );
    this.notifyService.showSuccess("Successful !!", "File Upload");
  }
}
