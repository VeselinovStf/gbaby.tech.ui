import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostDetailsComponent } from 'src/app/components/blog/blog-post-details/blog-post-details.component';

import { BlogHomeComponent } from 'src/app/pages/blog/blog-home/blog-home.component';


const routes: Routes = [
    {
        path: '',
        component: BlogHomeComponent
    },
    {
        path: ':id',
        component: BlogPostDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }