import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/sections/nav/nav.component';
import { AuthButtonComponent } from './components/auth/auth-button/auth-button.component';
import { AuthLoginButtonComponent } from './components/auth/auth-login-button/auth-login-button.component';
import { AuthLogoutButtonComponent } from './components/auth/auth-logout-button/auth-logout-button.component';
import { HeaderComponent } from './components/sections/header/header.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

// Private
import { DemoComponent } from './private/demo/demo.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FooterComponent } from './components/sections/footer/footer.component';
import { BlogHomeComponent } from './pages/blog/blog-home/blog-home.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { BlogCardComponent } from './components/blog/blog-card/blog-card.component';
import { BlogPostDetailsComponent } from './components/blog/blog-post-details/blog-post-details.component';
import { BlogSearchComponent } from './components/blog/blog-search/blog-search.component';
import { BlogRecentPostsComponent } from './components/blog/blog-recent-posts/blog-recent-posts.component';
import { BlogCategoriesComponent } from './components/blog/blog-categories/blog-categories.component';
import { BlogTagsComponent } from './components/blog/blog-tags/blog-tags.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { CarouselSectionComponent } from './components/sections/carousel-section/carousel-section.component';
import { TopFeaturesComponent } from './components/sections/top-features/top-features.component';

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
    HeroSectionComponent,
    CarouselSectionComponent,
    TopFeaturesComponent
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
