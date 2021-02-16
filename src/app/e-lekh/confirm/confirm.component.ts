import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, Inject } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent implements OnInit, OnDestroy {

  events: string[] = [];
  opened: boolean;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder,
  private http: HttpClient) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  exampleForm: FormGroup;
  userForm: FormGroup;
  myFormValueChanges$;

  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      // companyName: ['', [Validators.required, Validators.maxLength(25)]],
      // countryName: [''],
      // city: [''],
      // zipCode: [''],
      // street: [''],
    });

    // this.myFormValueChanges$ = this.exampleForm.controls['units'].valueChanges;

    // const geoIpInfo = this.storage.retrieve('geoIpInfo');
    // if (geoIpInfo) {
    //   this.exampleForm.patchValue({
    //     countryName: geoIpInfo.country_name,
    //     city: geoIpInfo.city,
    //     zipCode: geoIpInfo.postal,
    //     companyName: geoIpInfo.org
    //   });
    // } else {
    //   this.getCountryByIpOnline().subscribe((res) => {
    //       console.log('This is your IP information: ', res );
    //       this.storage.store('geoIpInfo', res);
    //       this.exampleForm.patchValue({
    //         countryName: res.country_name,
    //         city: res.city,
    //         zipCode: res.postal,
    //         companyName: geoIpInfo.org
    //       });
    //   }, (err) => {
    //       this.exampleForm.patchValue({countryName: 'N/A', city: 'N/A', zipCode: 'N/A'});
    //   });
    // }
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnDestroy(): void {
    this.myFormValueChanges$.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  save(model: any, isValid: boolean, e: any) {
    e.preventDefault();
    alert('Form data are: ' + JSON.stringify(model));
  }

}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}