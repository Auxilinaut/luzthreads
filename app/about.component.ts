import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'about',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'about.component.html'
})
export class AboutComponent {
    ngOnInit(){
        
    }
}