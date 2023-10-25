import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  change=new EventEmitter();
@Output()text:string="";
onPress(){
  this.change.emit(this.text);
}
}
