import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {Post} from '../model/Post';
import {TestData} from '../data/TestData';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @ViewChild('inputTitle') inputTitleRef: ElementRef;
  //передава во вне данных
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();

  title: string;
  text: string;
  id: number;

  constructor() { }

  ngOnInit(): void {
  }

  addPost(){
    //console.log(this.title, this.text);
    const post: Post = {
      title: this.title,
      text: this.text,
    }
    //передаем получиный обьект
    this.onAddPost.emit(post);
    this.title = "";
    this.text = "";
  }

  focusTitle(){
    this.inputTitleRef.nativeElement.focus();
  }
}
