import { Component, OnInit, EventEmitter, Input,  Output, ViewChild, ElementRef } from '@angular/core';
import {Post} from '../model/Post';
import {TestData} from '../data/TestData';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  form: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, [
        Validators.required
      ]),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      text: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }
  ngOnChanges(): void {
  /*  if(this.newattributes){
      this.id = this.newattributes.id;
      this.title = this.newattributes.title;
      this.text = this.newattributes.text;
    }*/
  }

  addPost(){
    if(this.form.valid){
      console.log(this.form);
    }else{
      console.log("Not Valid");
    }

  /*  const post: Post = {
      id: this.id,
      title: this.title,
      text: this.text,
    }
    //передаем получиный обьект
    this.onAddPost.emit(post);
    this.id = null;
    this.title = "";
    this.text = "";*/
  }

  focusTitle(){
    const title = this.form.get('title').value;
    console.log(title);
    this.form.patchValue({text:title});
  }
}
