import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
@Input() @Output() word:string="Clean";
@Output()isComplete:boolean=false;
@Output() change=new EventEmitter();
map=new Map();
constructor() {
}
isDone(state:boolean){
  this.isComplete=!this.isComplete;
  this.map.set(this.word,state);
    this.change.emit(this.map);
}

}
