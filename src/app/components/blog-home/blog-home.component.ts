import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { IBlogPost } from 'src/app/types/iblog-post';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html'
})
export class BlogHomeComponent implements OnInit {
  posts: IBlogPost[] = [];
  isLoaded!: boolean;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts()
      .then((n) => {
        this.posts = n;
        this.isLoaded = true;
      }).catch((error) => {
        console.log("API ERROR");
        console.log(error)
      })
  }

}
