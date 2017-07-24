import {Component, Injectable} from '@angular/core';
import {Craft} from './craft'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

//TODO: use queries for picking/sorting

@Injectable()

@Component({
  moduleId: module.id
})

export class CraftService {
	public dbCrafts: FirebaseListObservable<Craft[]>;
	//private sortSubject: Subject<any>;

	constructor(public db: AngularFireDatabase) {
		//this.sortSubject = new Subject();
      	this.dbCrafts = db.list('crafts');
  	}

	getCrafts(startIndex?: number, endIndex?:number): Observable<Craft[]>{
		if (startIndex && endIndex){
			return this.dbCrafts.map(crafts => crafts.filter(craft => craft.id <= startIndex && craft.id >= endIndex));
		}else{
			return this.dbCrafts.map(crafts => crafts);
		}
	}

	getCraft(id: number): Observable<Craft>{
		return this.dbCrafts.map(crafts => crafts.filter(craft=>craft.id === id)[0]);
	}

}

