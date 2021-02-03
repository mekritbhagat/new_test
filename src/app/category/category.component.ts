import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  direction = "row";
  DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse', 'space--between'];
  constructor() { }

  //ngOnInit() {}
  ngOnInit(): void {
  }

  // toggleDirection() {
  //   let next = (this.DIRECTIONS.indexOf(this.direction) +1) % this.DIRECTIONS;
  //   this.direction = this.DIRECTIONS[next];
  // }

}