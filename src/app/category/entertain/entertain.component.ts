import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntertainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
}

export interface Section {
  name: string;
  updated: Date;
}
