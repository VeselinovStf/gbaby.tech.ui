import { Component, Input, OnInit } from '@angular/core';
import { IBlogPost } from 'src/app/types/iblog-post';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html'
})
export class BlogCardComponent implements OnInit {
  @Input() post!: IBlogPost;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.post.category)
  }

}
