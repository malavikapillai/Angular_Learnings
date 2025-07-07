import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GreetingComponent } from "./greeting/greeting.component";
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LikeComponent } from './like/like.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ChildComponent } from "./child/child.component";
import { CommonModule } from '@angular/common'; 
import { MessageService } from './message.service';
import { ServiceEgService } from './service-eg.service';
import { ChildSharedComponent } from './child-shared/child-shared.component';
import { ParentSharedComponent } from './parent-shared/parent-shared.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TempleteFormComponent } from './templete-form/templete-form.component';
import { APIComponent } from './api/api.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, GreetingComponent, GreetingComponent, UserprofileComponent, LikeComponent, TwoWayBindingComponent, 
    ChildComponent,CommonModule,ChildSharedComponent,ParentSharedComponent,UserFormComponent,TempleteFormComponent,APIComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning Angualr';
  iswatching=true
  fruits=["apple","mangoes","strawberry"]

  message:string=''
  servicemsg: string='';
  // multiple DI
  constructor(private msgservice:MessageService, private s:ServiceEgService)
  {
    this.message=this.msgservice.getmessage();//Dependandcy Injection from a service
    this.servicemsg=this.s.hellofromservice()
  }
  // constructor(private msgservice:MessageService)
  // {
  //   this.message=this.msgservice.getmessage();//Dependandcy Injection from a service
  // }
}



