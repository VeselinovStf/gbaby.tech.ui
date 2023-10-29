import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.sass']
})
export class BlogSearchComponent implements OnInit {
  text!: string;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  search(e:any) {
    if (!e) {
      this.text += e.target.value
    }
    
    
    // Search
  }

}
