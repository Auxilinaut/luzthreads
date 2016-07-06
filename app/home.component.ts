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
		this.initInstafeed();
	}
	initInstafeed(){
		var Instafeed = require("instafeed");
		var feed = new Instafeed({
			get: 'user',
			userId: '2041333598',
			clientId: 'f6245b3f500747e884f844f2108bb494',
			accessToken: '2041333598.f6245b3.d07ed4dd11ef461abd6a31806cefe7dc',
			limit: '6',
			template: '<a href="{{link}}"><img src="{{image}}"/></a>'
		});
		feed.run();
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