import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-blog-tags',
  templateUrl: './blog-tags.component.html',
  styleUrls: ['./blog-tags.component.sass']
})
export class BlogTagsComponent{
  @Input() tags!: string[];

  @Output() tagChange = new EventEmitter<string>();
  @Input() debounceTime = 300;

  inputValue = new Subject<string>();

  trigger = this.inputValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit() {
    const subscription = this.trigger.subscribe(currentValue => {
      this.tagChange.emit(currentValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onInput(e: any) {
    this.inputValue.next(e.target.textContent);
  }

}
