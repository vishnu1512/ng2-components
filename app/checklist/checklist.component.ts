import { Component, Input } from '@angular/core';
import {Checkitem} from './CheckItem';

@Component({
  selector: 'checklist',
  templateUrl: './app/checklist/checklist.component.html'

})

export class ChecklistComponent { 
	@Input()
	title:String;

	@Input()
	inList:Checkitem[];

	@Input()
	tableClass:String;

	@Input()
	titleClass:String

	@Input()
	labelClass:String

	valueChanged(item){
		console.log(item);
	}
}
