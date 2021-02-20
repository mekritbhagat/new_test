import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AboutService } from "./about.service";
// import 'rxjs/Rx';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import { LocalStorageService } from 'ngx-webstorage';
// import { FillComponent } from '../view/fill/fill.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit, OnDestroy {

  // constructor() { }

  // ngOnInit(): void {
  // }

  exampleForm: FormGroup;
  // userForm: FormGroup;
  myFormValueChanges$;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    private aboutService: AboutService
  ) { }

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

  openDialog(): void {}
  // openDialog(): void {
  //   let dialogRef = this.dialog.open(FillComponent, {
  //     width: '600px',
  //     data: 'Send Data'
  //   });
  //   dialogRef.componentInstance.event.subscribe((result) => {});
  // }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required)
  });

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.myFormValueChanges$.unsubscribe();
  }

  save(model: any, isValid: boolean, e: any) {
    e.preventDefault();
    alert('Form data are: ' + JSON.stringify(model));
  }

  // private getUnit() {
  //   const numberPatern = '^[0-9.,]+$';
  //   return this.formBuilder.group({
  //     unitName: ['', Validators.required],
  //     qty: [1, [Validators.required, Validators.pattern(numberPatern)]],
  //     unitPrice: ['', [Validators.required, Validators.pattern(numberPatern)]],
  //     unitTotalPrice: [{value: '', disabled: true}]
  //   });
  // }

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.aboutService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

  getAllUsers() {
    this.aboutService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
        this.users = users;
    });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

}


