import { Component, OnInit, Input } from '@angular/core';

import { transition, trigger, group, animate, style, query } from '@angular/animations';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   {
  //     trigger('routeAnimations', [
  //       transition('newPage => profilePage', [
  //         group({
  //           query(':enter', style({opacity: 0})),
  //           query(':leave', [
  //             animate('1s', style({opacity: 0}))
  //           ]),
  //           query(':1s', style({opacity: 1}))
  //         }),
  //       ])
  //     ])
  //   }
  // ]
})
export class HomeComponent implements OnInit {

  breakpoint: number;
  opened: boolean = false;
  showing: boolean = false;
  election = false;
  // @Input('position')
  // set position(pos: number) {
  //   this.pause();
  //   this.player.setPosition(pos / 100);
  // }
  // play() {
  //   this.paused = false;
  //   this.player.play();
  // }
  // pause() {
  //   this.paused = true;
  //   this.player.pause();
  // }

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

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
  
  // showInfo(link: string) {
  //   link = 'www.google.com';
  //   return link;
  // }

  onClick(event) {
    if (!this.opened) {
      this.opened = !this.opened;
      if (!this.showing) {
        setTimeout(() => {
          this.showing = !this.showing;
        }, 1000);
      } else {
        this.showing = !this.showing;
      }
    }
  }

}

export interface Section {
name: string;
updated: Date;
}
