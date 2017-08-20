import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {Craft} from '../craft';
import {CraftService} from '../craft.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public crafts: Craft[] = [];
	private subject: ReplaySubject<Craft[]>;

	constructor(
		private router: Router,
		private craftService: CraftService
	) { }

  ngOnInit() {
		window.scrollTo(0, 0);
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

  goToDetail(craft: Craft){
		let link = ['/crafts', craft.slug ];
		this.router.navigate(link);
	}
  
  initInstafeed(){
		var Instafeed = require("assets/js/instafeed.min.js");
		var feed = new Instafeed({
			get: 'user',
			userId: '2041333598',
			clientId: 'f6245b3f500747e884f844f2108bb494',
			accessToken: '2041333598.f6245b3.d07ed4dd11ef461abd6a31806cefe7dc',
			limit: '4',
			template: '<div class="col-md-3 d-inline"><a href="{{link}}"><img src="{{image}}" class="img-fluid px-2 py-2"/></a></div>'
		});
		feed.run();
	}

}
