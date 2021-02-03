import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy-image-data',
  templateUrl: './lazy-image-data.component.html',
  styleUrls: ['./lazy-image-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyImageDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
