import { Component, Input, OnInit } from '@angular/core';
import { IPageContent } from 'src/app/types/ipageContent';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() footer!: IPageContent;
}
