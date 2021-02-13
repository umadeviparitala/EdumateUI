import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {produ} from 'src/app/regulation/regulation';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private isUserLogged: any;
  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
   getUserLogged(): any { // call this in AuthGuard
    return this.isUserLogged;
  }
  setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
   }
   registerStudent(student: any) {
     console.log(student);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/registerStudent/',  student);
   }
   registerOrganizer(organizer: any) {
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/registerOrganizer/',  organizer);
   }
   loginStudent(emailId : any,password : any) {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getStuByUserPass/'+ emailId + "/" + password);
   }
   loginOrganizer(emailId : any,password : any) {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getOrgByUserPass/'+ emailId + "/" + password);
   }
   loginStudentGoogle(emailId : any) {
     return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getObjectByEmail/' + emailId);
   }

   getAllStudents(): any {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getStudents');
  }
  registerUpload(selectedFile: any) {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/registerUpload/', selectedFile);
   }
   postFile(ImageForm: any, fileToUpload: File) {
    // const endpoint='RESTAPI/webapi/myresource/';
    const formData: FormData = new FormData();
    console.log(fileToUpload);
    formData.append('itemImage', fileToUpload, fileToUpload.name);
    formData.append('itemName', ImageForm.itemName);
    /*formData.append('itemDescription', ImageForm.itemDescription);*/
    console.log(formData);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/uploadImage', formData);
  }

  getProducts(value):Observable<produ[]> {
    console.log(value);
   return this.httpClient.get<produ[]>('Edumate_RESTAPI/webapi/myresource/getProducts/'+value);
  }

  addTask(tasks: any) {
    console.log(tasks);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/addTask/',  tasks);
  }
  getAllTasks(regNo: any): Observable<any> {
    //console.log(regNo);
    return this.httpClient.get<any>('Edumate_RESTAPI/webapi/myresource/getAllTasks/'+ regNo);
  }
  updateTask(updateObj: any): any {
    console.log(updateObj);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/editTask/', updateObj);
  }
  deleteTask(task: any): any {
    console.log(task);
    return this.httpClient.delete('Edumate_RESTAPI/webapi/myresource/deleteTask/'+ task.tid);
  }
  registerQuestion(value: any):any {
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/iUpload/',value);
  }
  getAllQuestions():any  {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getAllQ');
  }
  editProfile(updateObj: any): any {
    console.log("I am in service editProf"+updateObj);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/editProfile/', updateObj);
  }

  postFile1(ImageForm: any, fileToUpload: File,fileToUpload1:File) {
    // const endpoint='RESTAPI/webapi/myresource/';
    const formData: FormData = new FormData();
    console.log(fileToUpload);
    console.log(fileToUpload1);
    formData.append('itemImage', fileToUpload, fileToUpload.name);
    formData.append('pdf',fileToUpload1,fileToUpload1.name);
    formData.append('depName', ImageForm.depName);
    formData.append('bookName',ImageForm.bookName);
    formData.append('bookdecs',ImageForm.bookdecs);
    formData.append('aname',ImageForm.aname);
    //formData.append('itemDescription', ImageForm.itemDescription);
    console.log(formData);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/uploadEbook', formData);
  }

  getAllBooks():any {
    //console.log(dep);
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getAllBooks/');
  }

  feed(value:any,val:any):any {
    console.log(value.subject);
    console.log(val);
    const formData: FormData = new FormData();
    formData.append('subject',value.subject);
    formData.append('emailId',val);
    console.log(formData);
    
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/mail/',formData);
  }

  qSubmit(q: any, user: any):any {
    const formData: FormData = new FormData();
    formData.append('q',q.subject);
    formData.append('user',user);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/qpost/',formData);
  }

  getAllfQ():any {
    console.log("hi");
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getAllfQ/');
  }

  replya(updateObj: any): any {
    console.log(updateObj);
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/replya/', updateObj);
  }

  showAllRep(qid:any) :any {
    console.log(qid);
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getAllRep/'+qid);
  }

  postProfile(reg:any,fileToUpload: File):any{
    console.log("in service")
    const formData: FormData = new FormData();
    //console.log(fileToUpload);
    //console.log(fileToUpload1);
    formData.append('itemImage', fileToUpload, fileToUpload.name);
    //formData.append('pdf',fileToUpload1,fileToUpload1.name);
    formData.append('regdNo', reg);
    //formData.append('itemDescription', ImageForm.itemDescription);
    console.log("formData");
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/uploadProfilePic', formData);
  }
  deleteProfilePic(val:any) {
    return this.httpClient.post('Edumate_RESTAPI/webapi/myresource/deleteProfilePic/',val);
  }
  getStudent(reg:any):Observable<any> {
    return this.httpClient.get<any>('Edumate_RESTAPI/webapi/myresource/getStudent/'+ reg);
  }

  getCountStudents() : any {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getCount');
  }
  getCountEbooks() : any {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getCount1');
  }
  getCountInterviewQuestions() : any {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getCount2');
  }
  getCountItemDetails() : any {
    return this.httpClient.get('Edumate_RESTAPI/webapi/myresource/getCount3');
  }
}
  

