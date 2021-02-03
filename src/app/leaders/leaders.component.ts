import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
