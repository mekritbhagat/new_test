import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpinionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
