import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from 'src/app/components/auth/auth-button/auth-button.component';
import { AuthLoginButtonComponent } from 'src/app/components/auth/auth-login-button/auth-login-button.component';
import { AuthLogoutButtonComponent } from 'src/app/components/auth/auth-logout-button/auth-logout-button.component';
import { FooterComponent } from 'src/app/components/sections/footer/footer.component';



@NgModule({
  declarations: [
    AuthButtonComponent,
    AuthLoginButtonComponent,
    AuthLogoutButtonComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
