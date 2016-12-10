import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AngularFire } from 'angularfire2'

import {Craft} from './craft';
import {CraftService} from './craft.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
	moduleId: module.id,
    selector: 'craftedit',
    templateUrl: 'craftedit.component.html',
	inputs: ['changeRate','craftsLeft']
})

export class CraftEditComponent implements OnInit{
	
	crafts: Craft[] = [];
	private subject: ReplaySubject<Craft[]>;
	
	constructor(
		private af: AngularFire,
		private router: Router, 
		private craftService: CraftService
	) {}

	ngOnInit(){
		this.subject = new ReplaySubject<Craft[]>();
		this.craftService
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
		this.router.navigate(['detail', idpass ]);
	}
	logout(){
		this.af.auth.logout();
	}
}