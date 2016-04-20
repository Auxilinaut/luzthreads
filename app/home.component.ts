import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Craft} from './craft';
import {CraftService} from './craft.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
	crafts: Craft[] = [];
	constructor(private _router: Router, private _craftService: CraftService) { }
	ngOnInit() {
		this._craftService.getCrafts().then(crafts => this.crafts = crafts.slice(Math.max(crafts.length - 3, 1)).reverse());
	}
	gotoDetail(craft: Craft){
		let link = ['CraftDetail', { id: craft.id }];
		this._router.navigate(link);
	}
}