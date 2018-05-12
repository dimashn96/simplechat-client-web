import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {HttpService} from '../services/http.service';

import {AppComponent} from '../components/app.component';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
