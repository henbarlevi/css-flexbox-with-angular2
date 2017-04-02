import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import {TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent} from './side-bar/side-bar.component';
@NgModule({
  //components and pipes
  declarations: [ 
    AppComponent,
    HomeComponent,
    TopBarComponent,
    SideBarComponent
  ],
  //modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //services and guards
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
