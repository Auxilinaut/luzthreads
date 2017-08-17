import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Craft} from '../craft';
import {CraftService} from '../craft.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.css']
})
export class CraftsComponent implements OnInit {
	
	crafts: Craft[] = [];
	private subject: ReplaySubject<Craft[]>;
	
	constructor(
		private router: Router,
		private craftService: CraftService
	) {}

	ngOnInit(){
		window.scrollTo(0, 0);
		this.subject = new ReplaySubject<Craft[]>();
		this.craftService
			.getCrafts()
			.subscribe(
				this.subject
			);
		this.subject.subscribe(
			cs=>{this.crafts=cs.reverse()},
    			e => console.log('onError: ' + e.message),
    			() => console.log('onCompleted'));
  }
	
	goToDetail(slugpass: string) {
		this.router.navigate(['/crafts', slugpass ]);
	}
}