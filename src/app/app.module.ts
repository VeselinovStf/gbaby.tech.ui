import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthLoginButtonComponent } from './components/auth-login-button/auth-login-button.component';
import { AuthLogoutButtonComponent } from './components/auth-logout-button/auth-logout-button.component';
import { HeaderComponent } from './components/header/header.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

// Private
import { DemoComponent } from './private/demo/demo.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FooterComponent } from './components/footer/footer.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { BlogSearchComponent } from './components/blog-search/blog-search.component';
import { BlogRecentPostsComponent } from './components/blog-recent-posts/blog-recent-posts.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { BlogTagsComponent } from './components/blog-tags/blog-tags.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AuthButtonComponent,
    AuthLoginButtonComponent,
    AuthLogoutButtonComponent,
    DemoComponent,
    FooterComponent,
    BlogHomeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UnderConstructionComponent,
    PageNotfoundComponent,
    BlogCardComponent,
    BlogPostDetailsComponent,
    BlogSearchComponent,
    BlogRecentPostsComponent,
    BlogCategoriesComponent,
    BlogTagsComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.AUTH_DOMAIN,
      clientId: environment.AUTH_CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
