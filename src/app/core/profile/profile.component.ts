import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hero = 'Hero';
  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.hero = 'New Hero';
  }

}
