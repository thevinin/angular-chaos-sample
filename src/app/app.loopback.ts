import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  template: `<input #box (keyup)="0"
  (blur) = "onBlur(box.value)"
  (focus) = "onFocus()">
  <p>{{userinput}}</p>
  `
})
export class LoopbackComponent{
  userinput: string = '';
  temp: string = '';

  onBlur(value: string){
    this.temp = value;
    this.userinput = 'WTF';
  }

  onFocus(){
    this.userinput = this.temp;
    this.temp = '';
  }
}