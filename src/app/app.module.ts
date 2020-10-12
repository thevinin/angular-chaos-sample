import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoopbackComponent } from './app.loopback';
import { AppDate } from './app.date';
import { MessageDisplay } from './app-msg-display/app.message.display';
import { AppMsg } from './app-msg/app.message';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LoopbackComponent, AppDate, MessageDisplay, AppMsg ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
