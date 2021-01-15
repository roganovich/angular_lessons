import { Component, OnInit, EventEmitter, Input,  Output, ViewChild, ElementRef } from '@angular/core';
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
  @Input() newattributes: Post;

  title: string;
  text: string;
  id: number;

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(): void {
    if(this.newattributes){
      this.id = this.newattributes.id;
      this.title = this.newattributes.title;
      this.text = this.newattributes.text;
    }
  }

  addPost(){
    //console.log(this.title, this.text);
    const post: Post = {
      id: this.id,
      title: this.title,
      text: this.text,
    }
    //передаем получиный обьект
    this.onAddPost.emit(post);
    this.id = null;
    this.title = "";
    this.text = "";
  }

  focusTitle(){
    this.inputTitleRef.nativeElement.focus();
  }
}
