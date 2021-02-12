import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const url = 'http://localhost:3000/upload'
@Component({
  selector: 'app-e-lekh',
  templateUrl: './e-lekh.component.html',
  styleUrls: ['./e-lekh.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ELekhComponent implements OnInit {

  value = 0;
  disabled = false;
  min = 0;
  max = 10;
  allowEdit = false;
  hideButton = true;
  uploader: FileUploader = new FileUploader({url: url});
  attachmentList: any = [];

  constructor() { 
    this.uploader.onCompleteItem = (item:any, response: any, status:any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }
  }

  ngOnInit() {
  }

  editStory(): void {
    this.allowEdit = true;
    this.hideEdit();
  }

  hideEdit(): void {
    this.hideButton = false;
  }

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}


interface Food {
  value: String;
  viewValue: String;
}