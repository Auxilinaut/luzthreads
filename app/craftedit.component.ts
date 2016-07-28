import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Craft} from './craft';
import {CraftService} from './craft.service';
import {ReplaySubject} from 'rxjs/replaysubject';

@Component({
    selector: 'craftedit',
    templateUrl: 'craftedit.component.html',
	inputs: ['changeRate','craftsLeft']
})

export class CraftEditComponent implements OnInit{
	
	crafts: Craft[] = [];
	private subject: ReplaySubject<Craft[]>;
	
	constructor(private _router: Router, private _craftService: CraftService) {}

	ngOnInit(){
		this.subject = new ReplaySubject<Craft[]>();
		this._craftService
			.getCrafts()
			.subscribe(
				this.subject
			);
		this.subject.subscribe(
			cs=>{this.crafts=cs.reverse();},
    			e => console.log('onError: ' + e.message),
    			() => console.log('onCompleted'));
	}
	
	addCrafts(amount?:number){
			//this.subject.add()
	}
	goToDetail(idpass) {
		this._router.navigate(['CraftDetail', { id: idpass }]);
	}
}