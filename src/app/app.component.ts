import { Component, OnInit } from '@angular/core';
import { IPageContent } from './types/ipageContent';
import { Router } from '@angular/router';
import { HomePageService } from './services/homePage/home-page.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IHomePage } from './types/ihomePage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  homePage!: IHomePage;
  header!: IPageContent;
  footer!: IPageContent;
  isDataLoaded!: boolean;

  constructor(
    private router: Router,
    private homePageService: HomePageService,
    private spinnerService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.spinnerService.start();

    this.homePageService.getHomePage()
      .then((data) => {
        this.homePage = data;

        this.header = this.homePage.content.filter(x => x.key == 'header')[0];
        this.footer = this.homePage.content.filter(x => x.key == 'footer')[0];

        this.isDataLoaded = true;

      }).catch((error) => {
        console.log("API ERROR: 2");
        console.log(error);
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


  getFooter() {
    return this.footer;
  }
}