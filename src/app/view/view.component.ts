import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {

  subscription: Subscription;
  dataResult: any[] = [];
  constructor(public dialog: MatDialog) {}
  // constructor(private sharedService: SharedService) {
  //   this.subscription = this.sharedService.getValue()
  //     .subscribe(message => this.sharedService.getList(message)
  //       .subscribe(data => { this.dataResult = data; console.log(data) }));
  // }

  ngOnInit(): void {
  }

}

export interface Message {
  from: String;
  subject: String;
  content: String;
}