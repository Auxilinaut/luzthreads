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
			cs => {
				this.crafts = cs;
				this.crafts = this.shuffle(this.crafts);
				this.crafts = this.crafts.slice(Math.max(this.crafts.length - 3, 1));
			}
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
			clientId: 'dd86093f5e6246f187c588b5ad6c1753',
			accessToken: '2041333598.dd86093.7b705edb38fa49fd8902bdf30e4231ef',
			limit: '4',
			template: '<div class="col-md-3 d-inline"><a href="{{link}}"><img src="{{image}}" class="img-fluid px-2 py-2"/></a></div>'
		});
		feed.run();
	}

	shuffle(array) {

  	var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
		
	}

}
