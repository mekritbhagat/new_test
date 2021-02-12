import { ChangeDetectionStrategy, NgZone, ViewChild, ChangeDetectorRef, Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { FileUploader } from 'ng2-file-upload';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Router } from '@angular/router';

const url = 'http://localhost:3000/upload';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {
  // exampleHeader = ExampleHeader;
  value = 0;
  disabled = false;
  min = 0;
  max = 10;
  exampleHeader = '';
  uploader: FileUploader = new FileUploader({url: url});
  attachmentList: any = [];

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private _ngZone: NgZone, private router: Router) { 
    this.uploader.onCompleteItem = (item:any, response: any, status:any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }
  }

  ngOnInit() {
  }

  editStory(): void {
    this.router.navigate(['/']);
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
  
  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }

  storis: Food[] = [
    {value: 'General', viewValue: 'General'},
    {value: 'Social Voilence', viewValue: 'Social Voilence'},
    {value: 'Life Style', viewValue: 'Life Style'},
    {value: 'Daily Life', viewValue: 'Daily Life'},
    {value: 'Tech Life', viewValue: 'Tech Life'},
  ];


}

// @Component({
//   selector: 'example-header',
//   styles: [`
//     .example-header {
//       display: flex;
//       align-items: center;
//       padding: 0.5em;
//     }

//     .example-header-label {
//       flex: 1;
//       height: 1em;
//       font-weight: 500;
//       text-align: center;
//     }

//     .example-double-arrow .mat-icon {
//       margin: -22%;
//     }
//   `],
//   template: `
//     <div class="example-header">
//       <button mat-icon-button class="example-double-arrow" (click)="previousClicked('year')">
//         <mat-icon>keyboard_arrow_left</mat-icon>
//         <mat-icon>keyboard_arrow_left</mat-icon>
//       </button>
//       <button mat-icon-button (click)="previousClicked('month')">
//         <mat-icon>keyboard_arrow_left</mat-icon>
//       </button>
//       <span class="example-header-label">{{periodLabel}}</span>
//       <button mat-icon-button (click)="nextClicked('month')">
//         <mat-icon>keyboard_arrow_right</mat-icon>
//       </button>
//       <button mat-icon-button class="example-double-arrow" (click)="nextClicked('year')">
//         <mat-icon>keyboard_arrow_right</mat-icon>
//         <mat-icon>keyboard_arrow_right</mat-icon>
//       </button>
//     </div>
//   `,
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class ExampleHeader<D> implements OnDestroy {
//   private _destroyed = new Subject<void>();

//   constructor(
//       private _calendar: MatCalendar<D>, private _dateAdapter: DateAdapter<D>,
//       @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats, cdr: ChangeDetectorRef) {
//     _calendar.stateChanges
//         .pipe(takeUntil(this._destroyed))
//         .subscribe(() => cdr.markForCheck());
//   }

//   ngOnDestroy() {
//     this._destroyed.next();
//     this._destroyed.complete();
//   }

//   get periodLabel() {
//     return this._dateAdapter
//         .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
//         .toLocaleUpperCase();
//   }

//   previousClicked(mode: 'month' | 'year') {
//     this._calendar.activeDate = mode === 'month' ?
//         this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
//         this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
//   }

//   nextClicked(mode: 'month' | 'year') {
//     this._calendar.activeDate = mode === 'month' ?
//         this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
//         this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
//   }
// }


interface Food {
  value: String;
  viewValue: String;
}