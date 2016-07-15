import { Component, Input } from '@angular/core';
import {CheckItem} from './CheckItem';

@Component({
  selector: 'checklist',
  templateUrl: './app/checklist/checklist.component.html'

})

export class ChecklistComponent { 
	@Input()
	title:String;

	@Input()
	inList:CheckItem[];

	@Input()
	rootClass:String;

	@Input()
	listItemClass:String

	@Input()
	labelClass:String

	valueChanged(item){
		console.log(item);
	}
}
