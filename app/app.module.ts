import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { CraftService } from './craft.service';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { CraftsComponent } from './crafts.component';
import { CraftDetailComponent } from './craftdetail.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { CraftEditComponent } from './craftedit.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDgTd4NTcRejG_DkHSUsk2r65fOVofNWDk",
    authDomain: "luz-threads.firebaseapp.com",
    databaseURL: "https://luz-threads.firebaseio.com",
    storageBucket: "luz-threads.appspot.com",
    messagingSenderId: "514201865914"
};

@NgModule({
  imports: [ 
    NgbModule, 
    BrowserModule, 
    AngularFireModule.initializeApp(firebaseConfig) ,
    routing
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    CraftsComponent,
    CraftDetailComponent,
    AboutComponent,
    ContactComponent,
    CraftEditComponent 
  ],
  providers: [
    CraftService
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }