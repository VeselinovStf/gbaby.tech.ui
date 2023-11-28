import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.sass']
})
export class NewsLetterComponent implements OnInit {
  showRecaptcha: boolean = false;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  correctCaptcha(a: any){
    console.log(a)
  }

  onEmailClick(){
    this.showRecaptcha = true;
  }

}
