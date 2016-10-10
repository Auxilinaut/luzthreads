import {Component, Injectable} from '@angular/core';
import {Craft} from './craft'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toarray';

@Injectable()

@Component({
  moduleId: module.id
})

export class CraftService {
	public dbCrafts: FirebaseListObservable<Craft[]>
	constructor(public af: AngularFire) {
      this.dbCrafts = af.database.list('crafts');
  	}
	getCrafts(startIndex?: number, endIndex?:number): Observable<Craft[]>{
		if (startIndex && endIndex){
			return this.dbCrafts.map(crafts => crafts.filter(craft => craft.id < startIndex && craft.id >= endIndex));
		}else{
			return this.dbCrafts.map(crafts => crafts);
		}
	}
	getCraft(id: number): Observable<Craft>{
		return this.dbCrafts.map(crafts => crafts.filter(craft=>craft.id === id)[0]);
	}
}

