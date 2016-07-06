import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
//declare var firebase:any; removed for testing

@Component({
  moduleId: module.id,
  selector: 'craftedit',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'craftedit.component.html'
})
export class CraftEditComponent {
  crafts: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
      this.crafts = af.database.list('crafts');
  }
}