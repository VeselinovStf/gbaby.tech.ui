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

  getAllPosts(): Promise<any> {
    return this.sanityService.getClient().option.fetch(`*[_type == "blog-page"]{
  posts[]{
    mainImage{
      asset->{
        url
      }
    },
    title{
        "text":${this.selectedLocale.name}
    },
    href,
    description{
        "text":${this.selectedLocale.name}
    },
    date,
    author{
      name{
        "text":${this.selectedLocale.name}
    }
    },
    tags[]{
      title{
        "text":${this.selectedLocale.name}
    }
    }
  }
}[0]`);
  }
}