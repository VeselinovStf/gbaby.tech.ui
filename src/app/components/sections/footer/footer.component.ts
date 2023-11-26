import { Component, Input, OnInit } from '@angular/core';
import { INav } from 'src/app/types/inav';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent{
  @Input() socialNavigation!: INav;
  @Input() serviceNavigation!: INav;
  @Input() quickLinkNavigation!: INav;
  @Input() addressNavigation!: INav;
}
