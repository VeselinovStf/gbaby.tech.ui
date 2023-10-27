import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' }  ,
  { path: "blog", component: BlogHomeComponent },
  { path: "blog/{:id}", component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
