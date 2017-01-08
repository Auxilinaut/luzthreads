import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Ng2MapComponent } from 'ng2-map';

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html'
})

export class ContactComponent {
    constructor(){
      Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=AIzaSyDpQwo7MKuEDxmvDcaseTZ_QHo1r20pKVQ';
    }
    ngOnInit(){
        
    }
}