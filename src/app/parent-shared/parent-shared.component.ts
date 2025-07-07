import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-shared',
  imports: [FormsModule],
  templateUrl: './parent-shared.component.html',
  styleUrl: './parent-shared.component.css'
})
export class ParentSharedComponent {
  inputmsg: string='';
  constructor(private msg: SharedService){}
  sendMessage()
  {
    this.msg.setmessage(this.inputmsg);
  }


}
