import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CraftsComponent } from './crafts/crafts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CraftDetailComponent } from './craft-detail/craft-detail.component';
import { CraftService } from './craft.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NguiMapModule} from '@ngui/map';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CraftsComponent,
    AboutComponent,
    ContactComponent,
    CraftDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDpQwo7MKuEDxmvDcaseTZ_QHo1r20pKVQ'})
  ],
  providers: [CraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
