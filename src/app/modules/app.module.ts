import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {HttpService} from '../services/http.service';

import {AppComponent} from '../components/app.component';
import {ConversationComponent} from '../components/conversation-component/conversation.component'

const appRoutes: Routes = [
    {
        path: 'conversation',
        component: ConversationComponent
    },
    {
        path: '**', 
        redirectTo: 'conversation'
    }
];

@NgModule({
  declarations: [
      AppComponent,
      ConversationComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
