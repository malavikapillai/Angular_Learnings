import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  sharedmsg: String='';

  setmessage(msg:String) //setter to update the msg
  {
    this.sharedmsg=msg;
  }

  getmessage():String{
    return this.sharedmsg; //to read the message

  }



}
