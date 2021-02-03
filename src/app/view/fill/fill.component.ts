import { Component, OnInit, EventEmitter, Inject, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FillComponent implements OnInit {

  
  flag = 'Post Form';
  sendData = {
    name: '',
    email: '',
    subject: '',
    phone: 0,
    send_date: new Date()
  };
  public event: EventEmitter<any> = new EventEmitter();
  
  constructor(
    public dialogRef: MatDialogRef<FillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }
    
    ngOnInit(): void {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // this.sendData = this.dataService.dataLength();
    // this.event.emit({data: this.sendData});
    this.dialogRef.close();
  }

  newsControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  news: News[] = [
    {name: 'Global', type: 'global'},
    {name: 'Sports', type: 'sports'},
    {name: 'Business', type: 'business'},
    {name: 'Life Style', type: 'life style'},
  ];

  //categories = this.dataService.getCategories();

}

interface News {
  name: string;
  type: string;
}
