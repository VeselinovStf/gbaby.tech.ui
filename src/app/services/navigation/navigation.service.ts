import { Injectable } from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { LocaleService } from '../utility/locale.service';
import { ILocale } from 'src/app/types/ilocale';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private selectedLocale: ILocale;

  constructor(
    private sanityService: SanityService,
    private localeService: LocaleService) {
      this.selectedLocale = localeService.getLocale();
  }

  mainNavigation(): Promise<any> {
    return this.sanityService.getClient().option.fetch(`*[_type == "siteConfig"]{
      mainNav->{ 
        _id,
        title{
          "text":${this.selectedLocale.name}
        },
        items[]{
          internalHref,
          text{
            "text":${this.selectedLocale.name}
          },
          navigationItemUrl
        }
      }
}[0]`);
  }

  socialNav(): Promise<any> {
    return this.sanityService.getClient().option.fetch(`*[_type == "siteConfig"]{
      socialNav->{ 
        _id,
        title{
          "text":${this.selectedLocale.name}
        },
        items[]{
          internalHref,
          text{
            "text":${this.selectedLocale.name}
          },
          navigationItemUrl
        }
      }
}[0]`);
  }
}
