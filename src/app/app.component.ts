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

import { NgcCookieConsentService, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { LocalStorageService } from './services/local-storage/local-storage.service';

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

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializeSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;
  
  constructor(
    private router: Router,
    private homePageService: HomePageService,
    private spinnerService: NgxUiLoaderService,
    private ccService: NgcCookieConsentService,
    private localStorageService: LocalStorageService,
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
          console.log(`navigationService getMainNavigation: Error: ${error}`)
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
          console.log(`navigationService getFooterNav: Error: ${error}`)
        }
      })


    this.homePageService.getHomePage()
      .then((data) => {
        this.homePage = data;

        this.header = this.homePage.content.filter(x => x.key == 'header')[0];

        this.isDataLoaded = true;

      }).catch((error) => {
        if(isDevMode()){
          console.log(`homePageService getHomePage: Error: ${error}`);
        }      
      })

    let confirm = this.localStorageService.getCookieConformation();
    if (confirm && confirm === "ok") {
      this.ccService.destroy();
    }

    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...

      });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...


      });

    this.initializeSubscription = this.ccService.initialized$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...


      });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        if (event.status == "dismiss") {
          this.localStorageService.setCookieConformation();
        }
      });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...

      });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...

      });
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

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}