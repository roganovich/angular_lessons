import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../model/Post';

@Pipe({
  name: 'postfilter',
  pure: false
})
export class PostfilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = ''): Post[] {
    if(!search.trim()){
      return posts
    }

    return posts.filter( post=>{
      return (post.title.toLowerCase().includes(search.toLowerCase()))
    })
  }

}
