import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { UploadComponent } from './upload/upload.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';
import { EbooksComponent } from './ebooks/ebooks.component';
import { TipsComponent } from './tips/tips.component';
import { TimetableComponent } from './timetable/timetable.component';
import { PracticeComponent } from './practice/practice.component';
import { RegulationComponent } from './regulation/regulation.component';
import { ForumsComponent } from './forums/forums.component';
import { TalentComponent } from './talent/talent.component';
import { ProfileComponent } from './profile/profile.component';
import { IquploadComponent } from './iqupload/iqupload.component';
import { CseComponent } from './cse/cse.component';
import { AdminbookComponent } from './adminbook/adminbook.component';
import { SoftwareComponent } from './software/software.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { AdminfComponent } from './adminf/adminf.component';
import { LogoutComponent } from './logout/logout.component';
import {TrialComponent} from './trial/trial.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const appRoot: Routes = [{path: '', component: TrialComponent},
{path: 'adminlogin', component: AdminLoginComponent},
{path: 'adminregister', component: AdminRegisterComponent},
{path: 'todo', component: TodoComponent},
{path: 'main', component: MainComponent},
{path: 'adminmain', component: AdminMainComponent},
{path: 'adminhome', component: AdminHomeComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'home',canActivate: [AuthGuard], component: HomeComponent},
{path: 'profile', component: ProfileComponent},
{path: 'upload', component: UploadComponent},
{path: 'iqupload', component: IquploadComponent},
{path: 'adminbook', component: AdminbookComponent},
{path: 'talent', component: TalentComponent},
{path: 'software', component: SoftwareComponent},
{path: 'suggestions', component: SuggestionsComponent},
{path: 'logout', component: LogoutComponent},
{
  path:'tips',
  component:TipsComponent
},
{
  path:'ebooks',
  component:EbooksComponent
},
{
  path:'practice',
  component:PracticeComponent
},
{
  path:'forums',
  component:ForumsComponent
},
{
  path:'adminf',
  component:AdminfComponent
},
{
  path:'regulation',
  component:RegulationComponent
},
{
  path:'timetable',
  component:TimetableComponent
},
{
  path:'ebooks/cse',
  component: CseComponent
},
{
  path:'cse',
  component: CseComponent
},
{
  path:'tips/talent',
  component:TalentComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    RegisterComponent,
    TodoComponent,
    UploadComponent,
    FooterComponent,
    EbooksComponent,
    TipsComponent,
    TrialComponent,
    TimetableComponent,
    PracticeComponent,
    RegulationComponent,
    ForumsComponent,
    TalentComponent,
    AdminMainComponent,
    ProfileComponent,
    IquploadComponent,
    CseComponent,
    AdminbookComponent,
    SoftwareComponent,
    SuggestionsComponent,
    AdminfComponent,
    LogoutComponent,
    AdminHomeComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoot),StorageServiceModule,
    AppRoutingModule, BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
