import { Component } from '@angular/core';

@Component({
  selector: 'app-msg',
  template: `
  <div>
  <div class="username">{{username}}</div>
  <div class="message">{{message}}</div>
  <div class="timestamp">{{timestamp}}</div>
  </div>
  `,
  styleUrls: ['./app.message.css']
})
export class AppMsg{
  username: string;
  message: string;
  timestamp: string;


  setMessage(username: string, message: string, timestamp: string){
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;
  }
}
