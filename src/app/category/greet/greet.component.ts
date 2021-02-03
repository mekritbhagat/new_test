import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetComponent implements OnInit {

  name = 'User';
  constructor() { }

  ngOnInit(): void {
  }

}
