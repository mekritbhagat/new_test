import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-today-news',
  templateUrl: './today-news.component.html',
  styleUrls: ['./today-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
