import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pagerr',
  templateUrl: './pagerr.component.html',
  styleUrls: ['./pagerr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
