import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { StudentServiceService } from './../student-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imageUrl: string;
  fileToUpload: File = null;
  reader: FileReader;
  z: string;
  constructor(private service: StudentServiceService, private notifyService : NotificationService) {
   // this.imageUrl = '/assets/images/flowers.jpg';
  }

  ngOnInit() {
  }

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
  OnSubmit(imageForm: any) {
    if(imageForm.itemName=="r18") {
      imageForm.itemName=18;
    }
    else if(imageForm.itemName == "r16") {
      imageForm.itemName=16;
    }
    this.service.postFile(imageForm, this.fileToUpload).subscribe (
      data => {
        console.log('done');
        this.z = "Uploaded";
       // this.imageUrl = '/assets/images/flowers.jpg';
      }
    );
    this.notifyService.showSuccess("Successful !!", "File Upload");
  }


  // handleFileInput(file: FileList) {
  //   this.fileToUpload = file.item(0);

  //   // Show image preview
  //   this.reader = new FileReader();
  //   this.reader.readAsDataURL(this.fileToUpload);
  //   this.reader.onload = (event: any) => {
  //     this.imageUrl = event.target.result;
  //   };
  // }

  // OnSubmit(imageForm: any) {
  //  this.service.postFile(imageForm, this.fileToUpload).subscribe(
  //    data => {
  //      console.log('done');
  //      this.imageUrl = '/assets/image/default.png';
  //    }
  //  );
  // }
}