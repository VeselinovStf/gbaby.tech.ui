import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { INav } from 'src/app/types/inav';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  nav!: INav;
  isLoaded!: boolean;

  constructor( private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.mainNavigation()
      .then((n) => {
        this.nav = n.mainNav
        this.isLoaded = true;
      }).catch((error) => {
        
        if(isDevMode()){
          console.log("API ERROR");
          console.log(error)
        }
        
      })
  }
}