import { Component, Input, OnInit } from '@angular/core';
import {Checkitem} from './CheckItem';

@Component({
  selector: 'checklist',
  templateUrl: './app/checklist/checklist.component.html'

})

export class ChecklistComponent extends OnInit{ 
	@Input()
	title:String;

	@Input()
	inList:Checkitem[];

	@Input()
	tableClass:String;

	@Input()
	titleClass:String;

	@Input()
	labelClass:String;

	@Input()
	rootClass:String;

	@Input()
	columns:Number = 1;

	displayList:Checkitem[][] = [];

	ngOnInit(){
		var currentList = [];
		for(let item of this.inList){
			if(currentList.length < this.columns){
				currentList.push(item);
			}else{
				this.displayList.push(currentList);
				currentList=[];
				currentList.push(item);
			}
		}
		this.displayList.push(currentList);
	}
}
