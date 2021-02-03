import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { NewsFeedService, News } from '../shared/newsfeed.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshComponent implements OnInit {

  constructor(private newsfeed: NewsFeedService) { }

  refreshTimer$ = timer(0, 30000);
  news$ = this.newsfeed.news$;
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.refreshTimer$.subscribe(this.newsfeed.refresh$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
