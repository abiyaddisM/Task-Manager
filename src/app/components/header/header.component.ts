import { Component } from '@angular/core';
import {TaskDataService} from "../../services/task-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public tasks:TaskDataService) {
  }
  word:string="Add";
  text:string="";

  addTask(){
    console.log(this.text);
    this.tasks.words.push(this.text);
    this.text="";
  }


  protected readonly event = event;
}
