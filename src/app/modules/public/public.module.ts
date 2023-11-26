import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ContactComponent } from 'src/app/components/sections/contact/contact.component';
import { UnderConstructionComponent } from 'src/app/pages/under-construction/under-construction.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    UnderConstructionComponent
  ],
})
export class PublicModule { }
