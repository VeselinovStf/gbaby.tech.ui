import { Component, Input, OnInit } from '@angular/core';
import { INav } from 'src/app/types/inav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent{
  @Input() nav!: INav;
}