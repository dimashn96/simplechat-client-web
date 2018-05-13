import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

import {HttpService} from '../services/http.service';
import {LocalStorageService} from '../services/localstorage.service';

import {AppComponent} from '../components/app.component';
import {ConversationComponent} from '../components/conversation-component/conversation.component'
import {Dialog} from '../components/dialog-component/dialog.component';

const appRoutes: Routes = [
    {
        path: 'conversation',
        component: ConversationComponent
    },
    // {
    //     path: '**', 
    //     redirectTo: 'conversation'
    // }
];

@NgModule({
  declarations: [
      AppComponent,
      ConversationComponent,
      Dialog,
  ],
  entryComponents: [
    Dialog
    ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      MatDialogModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule
    ],
  providers: [HttpService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
