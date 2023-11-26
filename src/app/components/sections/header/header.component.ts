import { Component, Input } from '@angular/core';
import { IPageContent } from 'src/app/types/ipageContent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() header!: IPageContent;
  
}
