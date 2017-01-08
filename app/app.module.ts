import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';

import { Ng2MapModule} from 'ng2-map';

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

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  imports: [
    Ng2MapModule,
    NgbModule, 
    BrowserModule, 
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routing,
    AuthModule,
    DashModule,
    CommonModule
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