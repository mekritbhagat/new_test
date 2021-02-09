import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPostComponent implements OnInit {

  exampleForm: FormGroup;
  userForm: FormGroup;
  myFormValueChanges$;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
  ) { }

  openDialog(): void {}
  // openDialog(): void {
  //   let dialogRef = this.dialog.open(FillComponent, {
  //     width: '600px',
  //     data: 'Send Data'
  //   });
  //   dialogRef.componentInstance.event.subscribe((result) => {});
  // }

  ngOnInit() {}
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnDestroy(): void {
    this.myFormValueChanges$.unsubscribe();
  }

  save(model: any, isValid: boolean, e: any) {
    e.preventDefault();
    alert('Form data are: ' + JSON.stringify(model));
  }
}
