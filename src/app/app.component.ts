import { Component, OnInit } from '@angular/core';
import { IPageContent } from './types/ipageContent';
import { Router } from '@angular/router';
import { HomePageService } from './services/homePage/home-page.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IHomePage } from './types/ihomePage';
import { isDevMode } from '@angular/core';
import { INav } from './types/inav';
import { NavigationService } from './services/navigation/navigation.service';
import { ILocaleString } from './types/ilocaleString';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  homePage!: IHomePage;
  header!: IPageContent;
  footer!: IPageContent;
  isDataLoaded!: boolean;
  topNavigation!: INav;
  socialNavigation!: INav;
  serviceNavigation!: INav;
  quickLinkNavigation!: INav;
  addressNavigation!: INav;
  siteTitle!: ILocaleString;

  constructor(
    private router: Router,
    private homePageService: HomePageService,
    private spinnerService: NgxUiLoaderService,
    private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.spinnerService.start();

    this.navigationService.getMainNavigation()
      .then((n) => {
        this.topNavigation = n.mainNav

        this.spinnerService.stop(); // TODO: remove from here
      }).catch((error) => {
        if (isDevMode()) {
          console.log(error)
        }

      })

    this.navigationService.getFooterNav() // TODO: remove from here
      .then((n) => {

        this.socialNavigation = n.socialNav
        this.serviceNavigation = n.serviceNav
        this.quickLinkNavigation = n.quickLinkNav
        this.addressNavigation = n.addressNav
        this.siteTitle = n.title;

      }).catch((error) => {
        if (isDevMode()) {
          console.log(error)
        }
      })


    this.homePageService.getHomePage()
      .then((data) => {
        this.homePage = data;

        this.header = this.homePage.content.filter(x => x.key == 'header')[0];

        this.isDataLoaded = true;

      }).catch((error) => {
        if(isDevMode()){
          console.log(error);
        }      
      })
  }

  isLoaded(): boolean {
    if (this.isDataLoaded) {
      this.spinnerService.stop();
    }

    return this.isDataLoaded;
  }

  getHeader() {
    return this.header;
  }

}