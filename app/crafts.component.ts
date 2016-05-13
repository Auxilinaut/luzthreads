import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Craft} from './craft';
import {CraftDetailComponent} from './craftdetail.component';
import {CraftService} from './craft.service';

@Component({
    selector: 'crafts',
    templateUrl: 'crafts.component.html',
	directives: [CraftDetailComponent]
})

export class CraftsComponent implements OnInit{ 
	crafts: Craft[];
	selectedCraft: Craft;
	
	constructor(private _router: Router, private _craftService: CraftService) {}
	
	getCrafts(){
		this._craftService.getCrafts().then(crafts => this.crafts = crafts.reverse());
	}
	
	ngOnInit(){
		this.getCrafts();
	}
	
	onSelect(craft: Craft) { this.selectedCraft = craft; }
	
	goToDetail(idpass) {
		this._router.navigate(['CraftDetail', { id: idpass }]);
	}
}