import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templete-form',
  imports: [FormsModule],
  templateUrl: './templete-form.component.html',
  styleUrl: './templete-form.component.css'
})
export class TempleteFormComponent {
 Userobj: any={
  firstname:'',
  lastname:'',
  username:'',
  city:'',
  state:'',
  zipcode:'',
  isagree:''


 }
 onsave()
 {
  debugger;
  const formvalue=this.Userobj;
 }

}
