import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './services/messaging.service';
import { environment } from '../environments/environment'
import { AsyncPipe } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { MessageboxComponent } from './messagebox/messagebox.component';
// import {} from '../../node_modules/@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    MessagesComponent,
    MessageboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
