import { Injectable, NgZone } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject, Observable, of as observableOf, Subject  } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(
    private router:Router,
    private angularFireMessaging: AngularFireMessaging,
    private ngZone: NgZone
  ) { }

  x(stuff){
    alert(stuff)
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        // alert(1234567890)
        console.log(token)
        // console.log('permission granted', token)
      },
      (err) => {
        alert(err)
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.onMessage(
      (payload) => {
        this.currentMessage.next(payload);
      },
      (err) => {
        alert(99999)
      }
    )  
  }

  // receiveMessageBackground() {
  //   alert(2)
  //   this.angularFireMessaging.onMessage((payload) => {
  //     console.log(payload)
  //   })
  // }
}

// et phone_number = payload.data.phone_number
//       let url = encodeURIComponent(phone_number)
//       if(this.router.url == `/messages/${url}`){
//         this.currentMessage.next(payload);
//       }else{
//         console.log('nooooooooooooo')
//       }