import { Component, OnInit } from '@angular/core';
import { Subscription, of, pipe } from 'rxjs';
import { BlogService } from 'src/app/services/blog/blog.service';
import { IBlogPost } from 'src/app/types/iblog-post';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html'
})
export class BlogHomeComponent implements OnInit {
  posts!: IBlogPost[];
  filteredPosts: IBlogPost[] | null = null;
  rescentPosts!: IBlogPost[];
  categories!: [];
  tags!: [];

  isLoaded!: boolean;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts()
      .then((n) => {
        this.posts = n;
        this.filteredPosts = n;
        this.rescentPosts = n;

        this.categories = n.map((e: any) => {
          return e.category.name.text
        });

        this.tags = n.map((e: any) => {
          return e.tags.map((d:any) =>{
            return d.title.text;
          })
        });

        this.isLoaded = true;
      }).catch((error) => {
        console.log("API ERROR");
        console.log(error)
      })
  }

  onTextChange(changedText: string) {
    if (changedText) {
      this.filteredPosts = this.posts
        .filter(p => p.title.text.toLocaleLowerCase().includes(changedText.toLocaleLowerCase()));
    } else {
      this.filteredPosts = this.posts;
    }
  }

  onCategorySelected(category: string) {
    if (category) {
      this.filteredPosts = this.posts
        .filter(p => p.category.name.text.toLocaleLowerCase().includes(category.toLocaleLowerCase().replace("- ","")));
    } else {
      this.filteredPosts = this.posts;
    }
  }

  onTagSelected(tag: string) {
    if (tag) {
      this.filteredPosts = this.posts
        .filter(p => p.tags.filter(t =>  t.title.text.toLocaleLowerCase().includes(tag.toLocaleLowerCase())));
    } else {
      this.filteredPosts = this.posts;
    }
  }
}
