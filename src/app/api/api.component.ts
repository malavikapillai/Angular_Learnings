import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {
  users: any[]=[];



  constructor(private http:HttpClient)
  {

  }
  getusers()
  {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>
    {
      this.users=result;
    });
  }

}
