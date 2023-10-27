import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/service/sanity.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  constructor(private sanityService: SanityService) {
  }
  posts: any[] = [];

  defaultImageURL =
    "https://cdn.sanity.io/images//production/f2618421dbd6de2a63ddea363195fbab8f41afc5-3543x2365.jpg";


  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  async getPosts(): Promise<any[]> {
    this.posts = await this.sanityService.getAllPosts();
    console.log(this.posts);
    return this.posts;
  } 

}
