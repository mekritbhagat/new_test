import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cstate',
  templateUrl: './cstate.component.html',
  styleUrls: ['./cstate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CstateComponent implements OnInit {

  selected = "Nepal";
  title = 'Nepal';
  myCotrol = new FormControl();
  states;

  constructor() {
    this.loadStates();
  }

  loadStates() {
    const allStates = 'State 1, State 2, State 3, State 4, State 5, State 6, State 7';
    this.states = allStates.split(/, +/g).map(function (state) {
      return {
        value: state.toUpperCase(),
        display: state
      };
    });
  }
  
  ngOnInit(): void {
  }

}
