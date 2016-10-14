import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {Craft} from './craft';
import {CraftService} from './craft.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
	private crafts: Craft[] = [];
	private subject: ReplaySubject<Craft[]>;
	constructor(
		private router: Router,
		private craftService: CraftService
	) { }
	ngOnInit() {
		this.subject = new ReplaySubject<Craft[]>();
		this.craftService.getCrafts().subscribe(this.subject);
		this.subject.subscribe(
			crafts => this.crafts = crafts.slice(Math.max(crafts.length - 3, 1)).reverse()
		);
		this.initInstafeed();
	}
	ngOnDestroy(){
		this.subject.unsubscribe();
	}
	gotoDetail(craft: Craft){
		let link = ['/detail', craft.id ];
		this.router.navigate(link);
	}
	goToCrafts(){
		let link = ['/crafts'];
		this.router.navigate(link);
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
}