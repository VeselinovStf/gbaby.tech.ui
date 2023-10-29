import { Injectable } from '@angular/core';
import { ILocale } from 'src/app/types/ilocale';
import { SanityService } from '../sanity/sanity.service';
import { LocaleService } from '../utility/locale.service';
import { IBlogPost } from 'src/app/types/iblog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private selectedLocale: ILocale;

  constructor(
    private sanityService: SanityService,
    private localeService: LocaleService) {
    this.selectedLocale = localeService.getLocale();
  }

  getPost(id: string | null): Promise<any>  {
    return this.sanityService.getClient().option.fetch(`*[_type == "post" && href == "${id}"]{
  content,
   mainImage{
      asset->{
        url
      }
    },
  title{
    ${this.selectedLocale.name}
  },
  href,
    description{
    ${this.selectedLocale.name}
    },
  author->{
    name{
    ${this.selectedLocale.name}
    }
  }
}
`);
  }

  getAllPosts(): Promise<any> {
    return this.sanityService.getClient().option.fetch(`*[_type == "post"]{
  content,
   mainImage{
      asset->{
        url
      }
    },
  title{"text": en},
  href,
  description{"text": en},
  author->{name{en}}  
}`);
  }
}