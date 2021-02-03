import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss'],
})
export class LifestyleComponent implements OnInit {
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
      name: 'Works',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Photo',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Reces',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Worok',
      updated: new Date('1/28/16'),
    },
  ];
}

export interface Section {
  name: string;
  updated: Date;
}
