import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'about',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'about.component.html'
})
export class AboutComponent {
    ngOnInit(){
        
    }
}