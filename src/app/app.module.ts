import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/sections/nav/nav.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

// Private
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FooterComponent } from './components/sections/footer/footer.component';
import { PrivateModule } from './modules/private/private.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
