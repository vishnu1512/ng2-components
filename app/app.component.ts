import { Component } from '@angular/core';
import { ChecklistComponent } from './checklist/checklist.component';
import {Checkitem} from './checklist/CheckItem';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  directives: [ChecklistComponent]
})
export class AppComponent {
	checklistTitle = "Test Checklist";
	checkList = [
		{label:"item1",checked:false},
		{label:"item2",checked:true},
		{label:"item3",checked:true},
		{label:"item4",checked:true},
		{label:"item5",checked:true},
		{label:"item6",checked:true},
		{label:"item7",checked:true},
		{label:"item8",checked:true},
		{label:"item9",checked:true},
	];
	checkRootClass="a b"
 }
