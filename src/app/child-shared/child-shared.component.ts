import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child-shared',
  imports: [],
  templateUrl: './child-shared.component.html',
  styleUrl: './child-shared.component.css'
})
export class ChildSharedComponent {
  message: string = '';

  constructor(private sharedService: SharedService) {}

  refreshMessage() {
    this.message = this.sharedService.getmessage() as string;
  }

}
