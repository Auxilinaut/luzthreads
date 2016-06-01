import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Craft} from './craft';
import {CraftService} from './craft.service';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'home',
  directives: [ROUTER_DIRECTIVES, CAROUSEL_DIRECTIVES],
  templateUrl: 'home.component.html',
  inputs:['wip']
})
export class HomeComponent {
	crafts: Craft[] = [];
	wip: Craft = ({id:0,type:"",name:"",description:"",image1:"",image6:""});
	constructor(private _router: Router, private _craftService: CraftService) { }
	ngOnInit() {
		this._craftService.getCraft(0).then(craft => this.wip = craft);
		this._craftService.getCrafts().then(crafts => this.crafts = crafts.slice(Math.max(crafts.length - 3, 1)).reverse());
	}
	gotoDetail(craft: Craft){
		let link = ['CraftDetail', { id: craft.id }];
		this._router.navigate(link);
	}
	goToCrafts(){
		let link = ['Crafts']
		this._router.navigate(link);
	}
}