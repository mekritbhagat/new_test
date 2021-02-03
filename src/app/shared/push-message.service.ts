import { Injectable } from '@angular/core';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs';
import { AnimationDurations } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class PushMessagingService {

  messaging = '';
  currentMessage = new BehaviorSubject(null);
  constructor() { }

//   private updateToken(token) {
//       this.someservice.take(1).subscribe(user => {
//           if (!user) return;

//           const data = { [user.uid]: token}
//           this.db.object('fcmTokens/').update(data);
//       })
//   }
 
//   getPermission() {
//       this.messaging.requestPermission().then(()
//       => {
//           return this.messaging.getToken();
//       })
//       .then(token => {
//           this.updateToken(token)
//       })
//       .catch((err) => {
//           console.log('Unable to notify', err);
//       });
//   }

//   receiveMessage() {
//       this.messaging.onMessage((payload) => {
//           this.currentMessage.next(payload);
//       });
//   }


    // for component part
    // message;
    // constructor(private msgService: PushMessagingService) {}
    // ngOnInit() {
    //     this.msgService.getPermission()
    //     this.msgService.receiveMessage()
    //     this.message = this.msgService.currentMessage
    // }


    // Current Message:
    // <h1>{{(message | async)?Notification.title}}</h1>
    // <img [src]="(message | async)?notification.icon" width="100px">
    // <p>{{(message | async)?Notification.body}}</p>
    // {{message | async | json}}


    // cloud functions
    // const functions = require('firebase-functions');
    // const admin = require("firebase-admin");
    // admin.initializeApp(functions.config().firebase);

    // exports.fcmSend = functions.database.ref('/messages/{userId}/{messageId}').onCreate(event => {
    //     const message = event.data.val()
    //     const userId = event.params.userId

    //     const payload = {
    //         notification: {
    //             title: message.title,
    //             body: message.body,
    //             icon: ""
    //         }
    //     };

    //     admin.database().
    //     ref(`/fcmTokens/${userId}`).once('value').then(token => token.val()).then(userFcmToken => {
    //         return admin.messaging().sendToDevice(userFcmToken, payload);
    //     })
    //     .then(res => {
    //         console.log("Send Successfully", res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // })    
}