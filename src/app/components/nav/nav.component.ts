import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { INav } from 'src/app/types/inav';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  nav!: INav;
  isLoaded!: boolean;

  constructor(private viewportScroller: ViewportScroller, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.mainNavigation()
      .then((n) => {
        this.nav = n.mainNav
        this.isLoaded = true;
      }).catch((error) => {
        console.log("API ERROR");
        console.log(error)
      })
  }

  scrollTo(position: string) {
    this.viewportScroller.scrollToAnchor(position);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // let element = document.getElementById('mainNav') as HTMLElement;

    // if (window.pageYOffset > 100) {
    //   element.classList.remove('affix-top');
    //   element.classList.add('affix');
    // } else {
    //   element.classList.remove('affix');
    //   element.classList.add('affix-top');
    // }
  }

}