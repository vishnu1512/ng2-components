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
		{label:"item2",checked:true}
	];
	checkRootClass="a b"
 }
