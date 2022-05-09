import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
 import { Appcontent } from './content/content.compenenet';
import { Appheader } from './header/header.compenenet';
import { Appside } from './side/side.compenenet';

@NgModule({
  declarations: [
    AppComponent,
    Appcontent,
     
     Appheader,
     Appside
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
