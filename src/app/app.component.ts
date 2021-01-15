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

  posts: Post[] = TestData.posts;

  updatePosts(post: Post){
    this.posts.unshift(post);
  }

}
