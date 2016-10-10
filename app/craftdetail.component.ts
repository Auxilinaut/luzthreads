import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Craft} from './craft';
import {CraftService} from './craft.service';
import {ReplaySubject} from 'rxjs/replaysubject';

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
	/*private prevsubject: ReplaySubject<Craft>;
	private nextsubject: ReplaySubject<Craft>;*/

	//imagenum: number = 1;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private craftService: CraftService){ }
		
	ngOnInit() {
		this.subject = new ReplaySubject<Craft[]>();
		/*this.prevsubject = new ReplaySubject<Craft>();
		this.nextsubject = new ReplaySubject<Craft>();*/
		this.goGetEm();
		
	}

	ngDoCheck() {
		if (this.craft && (this.craft.id != this.id)){
			this.goGetEm();
		}
	}

	ngOnDestroy() {
		//console.log("in onDestroy",this.craft)
		this.unsub();
	}

	unsub() {
		//console.log("in unsub",this.craft)
		this.subject.unsubscribe();
		this.craft = null;
		this.previouscraft = null;
		this.nextcraft = null;
		/*this.prevsubject.unsubscribe();
		this.nextsubject.unsubscribe();
		this.imagenum = 1;*/
		//console.log("after unsub",this.craft)
	}

	goGetEm() {
		this.route.params.subscribe((params: Params) => {

			this.id = +params['id'];
			this.previousid = this.id - 1;
			this.nextid = this.id + 1;
			console.log("goGetEm previd:",this.previousid,"id: ",this.id,"nextid: ",this.nextid);

			this.previouscraft = null;
			this.nextcraft = null;

			this.craftService.getCrafts(this.nextid, this.previousid).subscribe(this.subject);
			this.subject.subscribe(
				cs => cs.forEach(
					c => {
						if (c.id == this.id){
							this.craft = c;
							console.log("checked craft id " + c.id,c);
						}
						if (c.id == this.previousid){
							this.previouscraft = c;
							console.log("checked prev id " + c.id,c);
						}
						if (c.id == this.nextid){
							this.nextcraft = c;
							console.log("checked next id " + c.id,c);
						}
					}
				),
				e => console.log('onError: ' + e.message),
				() => console.log('onCompleted')
			);

			console.log("nextcraft? ",this.nextcraft,"previouscraft? ",this.previouscraft)

			/*
			this.craftService.getCraft(this.previousid).subscribe(this.prevsubject);
			this.prevsubject.subscribe(
				pc => {this.previouscraft = pc;},
				e => console.log('onError: ' + e.message),
				() => console.log('onCompleted')
			);

			this.craftService.getCraft(this.nextid).subscribe(this.nextsubject);
			this.nextsubject.subscribe(
				nc => {this.nextcraft = nc;},
				e => console.log('onError: ' + e.message),
				() => console.log('onCompleted')
			);
			*/
		});
	}

	goToCrafts() {
  		this.router.navigate(['/crafts']);
	}

	goToDetail(idpass) { 
		this.router.navigate(['/detail', idpass ]);
	}
}