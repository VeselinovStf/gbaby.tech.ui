import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/sections/nav/nav.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

// Private
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FooterComponent } from './components/sections/footer/footer.component';
import { PrivateModule } from './modules/private/private.module';
import { NewsLetterComponent } from './components/contacts/news-letter/news-letter.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'gbaby.tech' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  "position": "bottom-right",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#348E38",
      "text": "#000000",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn more",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NewsLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    PrivateModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.AUTH_DOMAIN,
      clientId: environment.AUTH_CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
