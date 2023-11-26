import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogCardComponent } from 'src/app/components/blog/blog-card/blog-card.component';
import { BlogPostDetailsComponent } from 'src/app/components/blog/blog-post-details/blog-post-details.component';
import { BlogSearchComponent } from 'src/app/components/blog/blog-search/blog-search.component';
import { BlogRecentPostsComponent } from 'src/app/components/blog/blog-recent-posts/blog-recent-posts.component';
import { BlogCategoriesComponent } from 'src/app/components/blog/blog-categories/blog-categories.component';
import { BlogTagsComponent } from 'src/app/components/blog/blog-tags/blog-tags.component';
import { BlogHomeComponent } from 'src/app/pages/blog/blog-home/blog-home.component';



@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogCardComponent,
    BlogPostDetailsComponent,
    BlogSearchComponent,
    BlogRecentPostsComponent,
    BlogCategoriesComponent,
    BlogTagsComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
