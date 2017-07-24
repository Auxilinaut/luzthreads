import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Craft} from './craft';
import {CraftService} from './craft.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';



@Component({
	moduleId: module.id,
	selector: 'craftdetail',
	templateUrl: 'craftdetail.component.html'
})

export class CraftDetailComponent implements OnInit, DoCheck, OnDestroy{
	craft: Craft;
	previouscraft: Craft;
	nextcraft: Craft;

	id: number;
	previousid: number;
	nextid: number;

	private subject: ReplaySubject<Craft[]>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private craftService: CraftService){ }
		
	ngOnInit() {
		this.subject = new ReplaySubject<Craft[]>();
		this.goGetEm();
	}

	ngDoCheck() {
		if (this.craft && (this.craft.id != this.id)){
			this.goGetEm();
		}
	}

	ngOnDestroy() {
		this.unsub();
	}

	unsub() {
		this.subject.unsubscribe();
		this.craft = null;
		this.previouscraft = null;
		this.nextcraft = null;
	}

	goGetEm() {
		this.route.params.subscribe((params: Params) => {

			this.id = +params['id'];
			console.log("id " + this.id);
			this.previousid = this.id - 1;
			this.nextid = this.id + 1;
			let count = 0;

			this.previouscraft = null;
			this.nextcraft = null;

			this.craftService.getCrafts(this.nextid, this.previousid).subscribe(this.subject);
			this.subject.subscribe(
				cs => cs.filter(
					c => {
						if (c.id == this.id){
							this.craft = c;
						}
						if (c.id == this.previousid){
							this.previouscraft = c;
						}
						if (c.id == this.nextid){
							this.nextcraft = c;
						}
					}
				),
				e => console.log('onError: ' + e.message),
				() => console.log('onCompleted')
			);

		});
	}

	goToDetail(idpass) { 
		this.router.navigate(['/detail', idpass ]);
	}
}