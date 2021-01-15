import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()post: Post;

  @Output() onUpdatePost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter<Post>();


  constructor() { }

  ngOnInit(): void {
  }

  updatePost(post: Post){
    //console.log(post);
    //передаем получиный обьект
    this.onUpdatePost.emit(post);
  }

  deletePost(post: Post){
    //console.log(post);
    //передаем получиный обьект
    this.onDeletePost.emit(post);
  }
}
