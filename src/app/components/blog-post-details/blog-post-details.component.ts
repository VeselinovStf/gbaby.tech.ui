import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { IBlogPost } from 'src/app/types/iblog-post';
import { toHTML } from '@portabletext/to-html'

@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.sass']
})
export class BlogPostDetailsComponent implements OnInit {
  post!: IBlogPost;
  isLoaded!: boolean;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(id)
      .then((n) => {
        this.post = n[0];
        this.post.content = toHTML(n[0].content)
        this.isLoaded = true;
      }).catch((error) => {
        console.log("API ERROR");
        console.log(error)
      })
  }
}
