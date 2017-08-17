import { Component, OnInit, DoCheck } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import {Craft} from '../craft';
import {CraftService} from '../craft.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-craft-detail',
  templateUrl: './craft-detail.component.html',
  styleUrls: ['./craft-detail.component.css']
})
export class CraftDetailComponent implements OnInit, DoCheck {

	craft: Craft;
	slug: string;

	private subject: ReplaySubject<Craft>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private craftService: CraftService){ 
		}
		
	ngOnInit() {
		this.subject = new ReplaySubject<Craft>();
		this.goGetEm();
		window.scrollTo(0, 0);
	}

	ngDoCheck() {
		if (this.craft && (this.craft.slug != this.slug)){
			this.goGetEm();
		}
	}

	unsub() {
		this.subject.unsubscribe();
		this.craft = null;
	}

	goGetEm() {
		this.route.params.subscribe((params: Params) => {

			this.slug = params['slug'];

			this.craftService.getCraft(this.slug).subscribe(this.subject);
			this.subject.subscribe(
				c => this.craft = c,
				e => console.log('onError: ' + e.message),
				() => console.log('onCompleted')
			);

		});
	}

	goToCrafts() {
  		this.router.navigate(['/crafts']);
	}

	goToDetail(slugpass) { 
		this.router.navigate(['/crafts', slugpass ]);
	}
}
