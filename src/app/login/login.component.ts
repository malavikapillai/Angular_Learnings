import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginobj: any=
  {
    email:'',
    password:''
  }
  onlogin()
  {
    debugger;
    if(this.loginobj.email=="123"&& this.loginobj.password=="111")
    {

    }
    else{
      alert("wrong password");
    }
  }

}
