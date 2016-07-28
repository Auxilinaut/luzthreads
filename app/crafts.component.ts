import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Craft} from './craft';
import {CraftService} from './craft.service';
import {ReplaySubject} from 'rxjs/replaysubject';

@Component({
    selector: 'crafts',
    templateUrl: 'crafts.component.html',
	inputs: ['changeRate','craftsLeft']
})

export class CraftsComponent implements OnInit, OnDestroy{
	
	crafts: Craft[] = [];
	public changeRate: number = 16;
	public onScreenAmt: number = 16;
	public craftsLeft: boolean = true;
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
			cs=>{this.crafts=cs.slice((cs.length - this.onScreenAmt),cs.length).reverse();},
    			e => console.log('onError: ' + e.message),
    			() => console.log('onCompleted'));
	}

	ngOnDestroy(){
		this.subject.unsubscribe();
		this.crafts = this.crafts.slice();
		this.onScreenAmt = this.changeRate;
		this.craftsLeft = true;
	}
	
	addCrafts(amount?:number){
			this.subject.subscribe(
				cs => {
					if(((cs.length - this.onScreenAmt) - this.changeRate) < 0){
						this.onScreenAmt = cs.length;
						this.craftsLeft = false;
					}else{
						this.onScreenAmt += this.changeRate;
					}
					this.crafts = cs.slice((cs.length - this.onScreenAmt),cs.length).reverse();
				},
    			e => console.log('onError: ' + e.message),
    			() => console.log('onCompleted'));
			}
	
	goToDetail(idpass) {
		this._router.navigate(['CraftDetail', { id: idpass }]);
	}
}