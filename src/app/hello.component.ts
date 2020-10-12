import { Component, Input } from '@angular/core';

@Component({
  selector: 'bello',
  template: `<h1>WTF {{fame}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input('name') fame: string;
}
