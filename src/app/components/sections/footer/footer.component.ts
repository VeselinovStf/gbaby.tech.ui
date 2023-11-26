import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { INav } from 'src/app/types/inav';
import { IPageContent } from 'src/app/types/ipageContent';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  nav!: INav;
  isLoaded!: boolean;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.socialNav()
      .then((n) => {
        this.nav = n.socialNav
        this.isLoaded = true;
      }).catch((error) => {
        console.log("API ERROR");
        console.log(error)
      })
  }
}
