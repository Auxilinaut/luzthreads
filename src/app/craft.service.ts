import { Injectable } from '@angular/core';
import { Craft } from './craft'
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CraftService {

  public dbCrafts: FirebaseListObservable<Craft[]>
	constructor(public db: AngularFireDatabase) {
      this.dbCrafts = db.list('crafts');
  }

	getCrafts(startIndex?: number, endIndex?:number): Observable<Craft[]>{
		if (startIndex && endIndex){
			return this.dbCrafts.map(crafts => crafts.filter(craft => craft.id <= startIndex && craft.id >= endIndex));
		}else{
			return this.dbCrafts.map(crafts => crafts);
		}
  }
  
	getCraft(slug: string): Observable<Craft>{
		return this.dbCrafts.map(crafts => crafts.filter(craft=>craft.slug === slug)[0]);
	}
  
}