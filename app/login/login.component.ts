import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from './../student-service.service';
import { ViewChild,ElementRef } from '@angular/core'
import { NotificationService } from '../notification.service';

declare var FB: any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./vendor/bootstrap/css/bootstrap.min.css','./fonts/font-awesome-4.7.0/css/font-awesome.min.css','./fonts/Linearicons-Free-v1.0.0/icon-font.min.css','./vendor/animate/animate.css','./vendor/css-hamburgers/hamburgers.min.css','./vendor/animsition/css/animsition.min.css','./vendor/select2/select2.min.css','./vendor/daterangepicker/daterangepicker.css','./css/util.css','./css/main.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2:any;
  title = 'google';
  student : any;
  constructor(private router: Router, private service: StudentServiceService, private notifyService : NotificationService) {
    this.student = {emailId: '', password: ''};
  }
  ngOnInit() {
    this.googleInitialize();
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '4146335272059776',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
    
  }
  // userLogin(): void {
  //   console.log('Inside user Login method...');
  //   console.log(this.user);
  // }

  loginSubmit(student : any): void {
    this.service.loginStudent(student.emailId,student.password).subscribe((result:any) => {if(result === null){
      this.notifyService.showError("Please recheck", "Invalid Credentials");  
    }
    else {
      this.service.setUserLoggedIn();
      localStorage.setItem("regdNo",result.regdNo);
      localStorage.setItem("emailId", result.emailId);
      localStorage.setItem("firstName", result.firstName);
      localStorage.setItem("lastName", result.lastName);
      localStorage.setItem("yearOfStudy", result.yearOfStudy);
      localStorage.setItem("password", result.password);
      localStorage.setItem("collegeName",result.collegeName);
      localStorage.setItem("about",result.about);
      localStorage.setItem("studentImg",result.studentImg);
      localStorage.setItem("phone",result.phone);
      
      this.router.navigate(['adminmain']);
      this.notifyService.showSuccess("Logged In successfully !!", "Welcome to Edumate");

    }
  });
}


  

    
    
  
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '1082354828524-0l9q72090empff90fsu17ih5h0lvulan.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        this.service.loginStudentGoogle(profile.getEmail()).subscribe((result:any) => {if(result === null){
          alert('Invalid Credentials');  
        }
        else {
          this.service.setUserLoggedIn();
          alert('Valid Credentials');
          //localStorage.setItem("emailId",result.firstName);
          this.router.navigate(['home']);
        }
      });
        //console.log('Password: ' + profile.getPassword());
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            var url = '/me?fields=id,name,email';
            FB.api(url, function(response) {
                 alert('Logged in Sucessfully ' + response.name);
            }, {scope: 'email'});
            FB.api('/me', {fields: 'name, email'}, function(response) {
              console.log( response );
              console.log( response.email );
          });
      
    
            this.service.setUserLoggedIn();
            console.log(response.email);
            console.log(response.name);
            console.log('login successful', 'Success!');
            this.router.navigate(['home'])
          }
           else
           {
           console.log('User login failed');
         }
      });

  }


}
