import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanityService } from 'src/app/service/sanity.service';
import { toHTML } from '@portabletext/to-html'

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  id: any;
  postDataContent: any;
  constructor(private sanityService: SanityService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }
  postData: any

  defaultImageURL =
    "https://cdn.sanity.io/images//production/f2618421dbd6de2a63ddea363195fbab8f41afc5-3543x2365.jpg";


  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }


  ngOnInit() {
    this.getPost(this.id)
  }

  async getPost(id: string) {
    this.postData = await this.sanityService.getSpecificPost(id);
    this.postDataContent = toHTML(this.postData.content);
    return this.postData;
  }
 

}
