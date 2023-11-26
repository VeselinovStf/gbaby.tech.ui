import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ContactComponent } from 'src/app/components/sections/contact/contact.component';
import { UnderConstructionComponent } from 'src/app/pages/under-construction/under-construction.component';
import { NavComponent } from 'src/app/components/sections/nav/nav.component';
import { FooterComponent } from 'src/app/components/sections/footer/footer.component';
import { PageNotfoundComponent } from 'src/app/pages/page-notfound/page-notfound.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UnderConstructionComponent,
    PageNotfoundComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    UnderConstructionComponent,
    PageNotfoundComponent,
  ],
})
export class PublicModule { }
