import { Post } from './../app.component';
import { Component, OnInit , EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';
  styleToggle = false;
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('myInputText', { static: false }) myInputText: ElementRef = {} as ElementRef;
  @ViewChild('myInputTitle',{static: false}) myinputTitle: ElementRef = {} as ElementRef;
  constructor() {}
  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.addPostUser.emit(post);
      this.title = '';
      this.text = '';
    }
  }
  onLoadDefault() {
    this.styleToggle = !this.styleToggle;
    if (this.styleToggle) {
      this.myInputText.nativeElement.style.color = "red";
      this.myinputTitle.nativeElement.style.fontWeight = "bold";
    } else {
      this.myInputText.nativeElement.style.color = "black";
      this.myinputTitle.nativeElement.style.fontWeight = "normal";
    }
  }
}
