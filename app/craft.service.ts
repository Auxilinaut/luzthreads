import {CRAFTS} from './mockcrafts';
import {Injectable} from '@angular/core';

@Injectable()

export class CraftService {
	getCrafts(startIndex?: number, endIndex?:number){
		if (startIndex && endIndex){
			return Promise.resolve(CRAFTS).then(crafts => crafts.filter(craft => craft.id >= endIndex && craft.id < startIndex));
		}
		return Promise.resolve(CRAFTS);
	}
	getCraft(id: number){
		return Promise.resolve(CRAFTS).then(crafts => crafts.filter(craft => craft.id === id)[0]);
	}
	getLength(){
		return CRAFTS.length;
	}
}