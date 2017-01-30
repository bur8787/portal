import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profile.component';
import { ContactComponent }  from './contact.component';


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent,ProfileComponent,ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
