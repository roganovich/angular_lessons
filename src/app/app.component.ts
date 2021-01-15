import { Component } from '@angular/core';
import {TestData} from './data/TestData';
import {Post} from './model/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'blogtest';
  newattributes: Post;

  posts: Post[] = TestData.posts;

  addToPosts(post: Post){
    const checkPost =  this.posts.find(item=>item.id==post.id);
    if(checkPost){
      const indexItem = this.posts.indexOf(checkPost);
      this.posts[indexItem] = post;
    }else{
      this.posts.unshift(post);
    }
  }

  updatePost(post: Post){
    //console.log(post);
    this.newattributes = post;
  }

  deletePost(post: Post){
    console.log(post);
    this.posts = this.posts.filter(function(item) {
        return item.id !== post.id;
    });
  }

}
