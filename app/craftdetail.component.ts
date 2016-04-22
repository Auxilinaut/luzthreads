import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Craft} from './craft';
import {CraftService} from './craft.service';

@Component({
  selector: 'craftdetail',
  templateUrl: 'craftdetail.component.html'
})
export class CraftDetailComponent {
	craft: Craft;
	previouscraft: Craft;
	nextcraft: Craft;
	public display2: Boolean = false;
	public display3: Boolean = false;
	
	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _craftService: CraftService){}
		
	ngOnInit() {
		let id = +this._routeParams.get('id');
		let previousid = id - 1;
		let nextid = id + 1;
		this._craftService.getCraft(id).then(craft => this.craft = craft);
		this._craftService.getCraft(previousid).then(pc => this.previouscraft = pc);
		this._craftService.getCraft(nextid).then(nc => this.nextcraft = nc);
	}
	
	goToCrafts() {
  		this._router.navigate(['Crafts']);
	}
	
	goToDetail(idpass) { 
		let id = +this._routeParams.get('id');
		//check if next exists
		if (!this.nextcraft && idpass>id){
			//do nothing
		}else{
			this._router.navigate(['CraftDetail', { id: idpass }]);
		}
	}
	
	/*
	goToContact() {
  		this._router.navigate(['Contact']);
	}*/
}