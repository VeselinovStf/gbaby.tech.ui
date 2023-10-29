import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { DemoComponent } from './private/demo/demo.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent, canActivate: [AuthGuard] },
  { path: 'blog', component: BlogHomeComponent },
  { path: 'blog/:id', component: BlogPostDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }