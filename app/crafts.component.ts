import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Craft} from './craft';
import {CraftService} from './craft.service';

@Component({
    selector: 'crafts',
    templateUrl: 'crafts.component.html',
	inputs: ['changeRate','startIndex']
})

export class CraftsComponent implements OnInit{
	
	crafts: Craft[] = [];
	public startIndex: number = this._craftService.getLength();
	endIndex: number;
	public changeRate: number = 16;
	
	constructor(private _router: Router, private _craftService: CraftService) {}
	
	ngOnInit(){
		this.endIndex = this.startIndex - this.changeRate;
		this.addCrafts(this.changeRate);
	}
	
	addCrafts(amount?:number){
		if(this.startIndex!=0){
			this._craftService.getCrafts(this.startIndex, this.endIndex).then(
				cs => this.crafts = this.crafts.concat(cs.reverse()));
		}
		if (this.startIndex>=this.changeRate){
			this.startIndex-=this.changeRate;
			this.endIndex-=this.changeRate;
		}else{
			this.startIndex=0;
			this.endIndex=0;
		}
	}
	
	goToDetail(idpass) {
		this._router.navigate(['CraftDetail', { id: idpass }]);
	}
}