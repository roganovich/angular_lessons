import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()post: Post;

  constructor() { }

  ngOnInit(): void {
  }

  updatePost(post: Post){
    console.log(post);
  }

  deletePost(post: Post){
    console.log(post);
  }
}
