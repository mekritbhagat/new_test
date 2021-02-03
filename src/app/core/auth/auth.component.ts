import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  ifAdmin = true;
  options: FormGroup;
  ngOnInit(): void {}

  constructor(fb: FormBuilder, private router: Router) {
      this.options = fb.group({
          color: 'primary',
          fontSize: [16, Validators.min(10)]
      });
  }

  getFontSize() {
      return Math.max(10, this.options.value.fontSize);
  }

  login() {
    if (this.ifAdmin) {
      this.router.navigate(['/en/admin']);
    }
    this.router.navigate(['/en/post']);
  }

}