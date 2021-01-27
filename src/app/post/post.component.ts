import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../model/Post';
import {CounterService} from '../services/counter.service';
import {LogService} from '../services/log.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [CounterService],
})
export class PostComponent implements OnInit {

  @Input()post: Post;

  @Output() onUpdatePost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter<Post>();


  constructor(public postCounterService:CounterService, private logService:LogService) { }

  ngOnInit(): void {
  }

  updatePost(post: Post){
    //console.log(post);
    //передаем получиный обьект
    this.onUpdatePost.emit(post);
    this.logService.log('onUpdatePost');
  }

  deletePost(post: Post){
    //console.log(post);
    //передаем получиный обьект
    this.onDeletePost.emit(post);
    this.logService.log('onDeletePost');
  }
}
