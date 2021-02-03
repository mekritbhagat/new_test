import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, QueryList, Input, ElementRef, ViewChild, ViewChildren, } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';

import { ScrollableDirective } from '../scroll.directive';
import { TopOffsetDirective } from '../top-offset.directive';


@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollListComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChildren(TopOffsetDirective) listItems: QueryList<TopOffsetDirective>;
  @ViewChild(ScrollableDirective) list: ScrollableDirective;

  selectedItem = Math.floor(Math.random() * 100);
  items = new Array(100).fill(0).map((_, i) => `Item ${i}`);

  ngAfterViewInit() {
    this.list.scrollTop = this.listItems.find((_, i) => i === this.selectedItem).offsetTop;
  }
}
