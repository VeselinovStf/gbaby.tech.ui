import { Component, Input, OnInit } from '@angular/core';
import { IBlogPost } from 'src/app/types/iblog-post';

@Component({
  selector: 'app-blog-recent-posts',
  templateUrl: './blog-recent-posts.component.html',
  styleUrls: ['./blog-recent-posts.component.sass']
})
export class BlogRecentPostsComponent{
  @Input() posts!: IBlogPost[];
}
