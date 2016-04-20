import {CRAFTS} from './mockcrafts';
import {Injectable} from 'angular2/core';

@Injectable()

export class CraftService {
	getCrafts(){
		return Promise.resolve(CRAFTS);
	}
	getCraft(id: number){
		return Promise.resolve(CRAFTS).then(crafts => crafts.filter(craft => craft.id === id)[0]);
	}
}