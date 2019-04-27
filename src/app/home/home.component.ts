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
  }

  ngOnDestroy(){
		this.subject.unsubscribe();
	}

  goToDetail(craft: Craft){
		let link = ['/crafts', craft.slug ];
		this.router.navigate(link);
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
