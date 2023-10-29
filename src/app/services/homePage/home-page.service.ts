import { Injectable } from '@angular/core';
import { SanityService } from '../sanity/sanity.service';
import { IHomePage } from 'src/app/types/ihomePage';
import { LocaleService } from '../utility/locale.service';
import { ILocale } from 'src/app/types/ilocale';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private selectedLocale: ILocale;
  
  constructor(
    private sanityService: SanityService,
    private localeService: LocaleService) {
      this.selectedLocale = localeService.getLocale();
  }

  getHomePage(): Promise<IHomePage> {
    return this.sanityService.getClient().option.fetch(`*[_type == "homePage"]{
        title,
        content[]{ 
          title{
            "text":${this.selectedLocale.name}
          },
          text{
            "text":${this.selectedLocale.name}
          },
          key,
          display,
          mainImage{
             asset->{
              url
            },
          },
          buttonText{
            "text":${this.selectedLocale.name}
          },
          buttonHREF,
          boxItems[]{
            title{
              "text":${this.selectedLocale.name}
            },
            text{
              "text":${this.selectedLocale.name}
            },
            icon,
            link,
            image{
             asset->{
                url
              }
            }
          }
      }
}[0]`);
  }
}
