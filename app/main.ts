///<reference path="../typings/browser.d.ts"/>

import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {enableProdMode} from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire } from 'angularfire2';
enableProdMode();
bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDgTd4NTcRejG_DkHSUsk2r65fOVofNWDk",
    authDomain: "luz-threads.firebaseapp.com",
    databaseURL: "https://luz-threads.firebaseio.com",
    storageBucket: "luz-threads.appspot.com"
  })
]);