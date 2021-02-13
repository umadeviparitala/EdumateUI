import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { NotificationService} from './../notification.service';
declare var jQuery: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageUrl: string;
  fileToUpload: File = null;
  reader: FileReader;
  updateObj: any;
  x:any;
  constructor(private service: StudentServiceService, private notifyService : NotificationService) {
    
    this.updateObj = {regdNo: '', firstName: '', lastName: '', emailId: '', password: '', yearOfStudy: ''};
   this.updateObj.regdNo = localStorage.getItem("regdNo");
  this.updateObj.firstName = localStorage.getItem("firstName");
  this.updateObj.lastName = localStorage.getItem("lastName");
  this.updateObj.emailId = localStorage.getItem("emailId");
  this.updateObj.password = localStorage.getItem("password");
  this.updateObj.yearOfStudy = localStorage.getItem("yearOfStudy");
  this.updateObj.about = localStorage.getItem("about");
  this.updateObj.studentImg = localStorage.getItem("studentImg");
  this.updateObj.collegeName = localStorage.getItem("collegeName");
  this.updateObj.phone = localStorage.getItem("phone");
  console.log(this.updateObj.phone);
  if(this.updateObj.phone===null){
     this.updateObj.phone='phone number';
     console.log("hey");
  }
//   this.service.getStudent(localStorage.getItem("regdNo")).subscribe(data =>{
//     this.updateObj.studentImg = data.studentImg;
// }
   //);
  //console.log(this.x+"heyy");
console.log(this.updateObj.studentImg)
  if(this.updateObj.studentImg==='' || this.updateObj.studentImg===undefined || this.updateObj.studentImg==='null') this.updateObj.studentImg="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg";
  else {
   this.updateObj.studentImg ="http://localhost:8080/Edumate_RESTAPI/image/"+this.updateObj.studentImg;
    console.log(this.updateObj.studentImg);
  }
    
   }
  ngOnInit():void {
  // this.service.getStudent(localStorage.getItem("regdNo")).subscribe(data =>{
  //       this.updateObj = data;
  //    }
  //       );
   }
   OnSubmit() {
    console.log("in  img submit"+this.updateObj.regdNo);
    this.service.postProfile(this.updateObj.regdNo,this.fileToUpload).subscribe (
      data => {
        console.log('done');
        //this.ngOnInit();
        //this.z = "Uploaded";
        this.updateObj.studentImg = this.imageUrl;
        localStorage.setItem("studentImg",this.updateObj.studentImg);
        console.log("In service onsubmit"+this.updateObj.studentImg);
      }
    );
    this.notifyService.showSuccess("Successful !!", "File Upload");
  }

   imgChange() {
    jQuery('#showPopup').modal('show'); //invoking popup
      }

  editProfile(): void {
    console.log("I am in editProfile" + this.updateObj);
    this.service.editProfile(this.updateObj).subscribe((result:any) => {console.log(result)
      this.notifyService.showSuccess("", "Updated Successfully");

    });
    }
  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.updateObj.studentImg=this.imageUrl;
    };
  }
  remove() {
    this.service.deleteProfilePic(this.updateObj).subscribe((result:any) => {console.log(result)
      this.notifyService.showSuccess("", "Updated Successfully");
      /*this.updateObj=result;
      console.log(result);
      console.log("remove"+this.updateObj);
      console.log("remove2"+this.updateObj.studentImg);*/
      //this.reader.readAsDataURL(this.fileToUpload);
      this.updateObj.studentImg="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg";
      //localStorage.setItem("studentImg",this.updateObj.studentImg);
      console.log(this.updateObj.studentImg);
      //this.updateObj.studentImg="";
      //this.updateObj.studentImg ="http://localhost:8080/Edumate_RESTAPI/image/"+this.updateObj.studentImg;
    });

  }
}