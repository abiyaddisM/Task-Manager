import {Component, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input()  word:string="Click";
change=new EventEmitter();
  onClick(){
    this.change.emit();
  }
}
