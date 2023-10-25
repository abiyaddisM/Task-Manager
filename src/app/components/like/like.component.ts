import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  isLiked:boolean=false;
  @Output() change=new EventEmitter();
  changeLike(){
    this.isLiked=!this.isLiked;
    this.change.emit(this.isLiked);
  }

}
