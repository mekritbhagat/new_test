import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-prabidhi',
  templateUrl: './prabidhi.component.html',
  styleUrls: ['./prabidhi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrabidhiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
  
  showInfo(link: string) {
    link = 'www.google.com';
    return link;
  }
}


export interface Section {
name: string;
updated: Date;
}
