import {Component, OnInit, OnDestroy} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';
import {Craft} from './craft';
import {CraftService} from './craft.service';
import {ReplaySubject} from 'rxjs/replaysubject';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap'

@Component({
  selector: 'craftdetail',
  directives: [CAROUSEL_DIRECTIVES],
  templateUrl: 'craftdetail.component.html',
  inputs: ['imagenum']
})
export class CraftDetailComponent implements OnInit, OnDestroy{
	craft: Craft;
	previouscraft: Craft;
	nextcraft: Craft;

	private subject: ReplaySubject<Craft>;
	private prevsubject: ReplaySubject<Craft>;
	private nextsubject: ReplaySubject<Craft>;

	imagenum: number = 1;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _craftService: CraftService){}
		
	ngOnInit() {
		let id = +this._routeParams.get('id');
		let previousid = id - 1;
		let nextid = id + 1;

		this.subject = new ReplaySubject<Craft>();
		this.prevsubject = new ReplaySubject<Craft>();
		this.nextsubject = new ReplaySubject<Craft>();

		this._craftService.getCraft(id).subscribe(this.subject);
		this.subject.subscribe(
			c => {
				this.craft = c;
				if (c.image4){
					this.imagenum = 4;
				}else if (c.image3){
					this.imagenum = 3;
				}else if (c.image2){
					this.imagenum = 2;
				}else{
					this.imagenum = 1;
				}
			},
			e => console.log('onError: ' + e.message),
    		() => console.log('onCompleted')
		);

		this._craftService.getCraft(previousid).subscribe(this.prevsubject);
		this.prevsubject.subscribe(
			pc => {this.previouscraft = pc;},
			e => console.log('onError: ' + e.message),
    		() => console.log('onCompleted')
		);

		this._craftService.getCraft(nextid).subscribe(this.nextsubject);
		this.nextsubject.subscribe(
			nc => {this.nextcraft = nc;},
			e => console.log('onError: ' + e.message),
    		() => console.log('onCompleted')
		);
	}
	
	goToCrafts() {
  		this._router.navigate(['Crafts']);
	}
	
	goToDetail(idpass) { 
		let id = +this._routeParams.get('id');
		//check if next exists, backwards
		if (idpass<id){
			if (!this.previouscraft || this.previouscraft.wip){
				//do nothing
			}else{
				this._router.navigate(['CraftDetail', { id: idpass }]);
			}
		}else{
			this._router.navigate(['CraftDetail', { id: idpass }]);
		}
	}

	ngOnDestroy(){
		this.subject.unsubscribe();
		this.prevsubject.unsubscribe();
		this.nextsubject.unsubscribe();
		this.imagenum = 1;
	}

	/*
	goToContact() {
  		this._router.navigate(['Contact']);
	}*/
}