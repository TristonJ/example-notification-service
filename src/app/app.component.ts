import { Component, OnInit } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase
      .init({
        showNotifications: false,
        showNotificationsWhenInForeground: false,
        onPushTokenReceivedCallback: token => {
          console.log(`Token Received: ${token}`);
        },
        onMessageReceivedCallback: (message: any) => {
          console.dir(message);
        },
      })
      .then(() => {
        console.log('[Firebase] Initialized');
      })
      .catch(error => {
        console.error('[Firebase] Initialize', { error });
      });
  }
}
