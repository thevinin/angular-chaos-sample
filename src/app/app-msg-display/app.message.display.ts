import { Component, OnInit } from '@angular/core';
import { AppMsg } from '../app-msg/app.message';

@Component({
  selector: 'msg-display',
  template: `
    <div>
      <div class="header">Messages</div>
      <div #messagearea><app-msg></app-msg></div>
    </div>
  `,
  styleUrls: ['./msg-display.css']
})
export class MessageDisplay{
  message: AppMsg;


}