import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

 words:string[];

  storage =localStorage;
  constructor() {
  const storedList=this.storage.getItem("lists");
// @ts-ignore
    this.words=JSON.parse(storedList);
  }
  refresh(){
    this.storage.clear();
    this.storage.setItem("lists",JSON.stringify(this.words));
  }
}
