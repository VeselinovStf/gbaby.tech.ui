import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
