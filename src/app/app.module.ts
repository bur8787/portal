import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }   from './app-routing.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profile.component';
import { ContactComponent }  from './contact.component';


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  declarations: [ AppComponent,ProfileComponent,ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
