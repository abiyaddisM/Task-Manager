import { Component } from '@angular/core';
import {TaskDataService} from "../../services/task-data.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  buttonText="Done";
  map=new Map();
  constructor(public tasks:TaskDataService) {

  }
  ticked(event:Map<string, boolean>){
    event.forEach((value,key)=>{
      if(value){
        this.map.set(key,value);
      }else{
        this.map.delete(key);
      }
      console.log(this.tasks.words);

    });
  }
  onClick(){
    this.map.forEach((value,key)=>{
      this.tasks.words=this.tasks.words.filter(item => item!=key);
      this.tasks.refresh();
    });
  }
}

