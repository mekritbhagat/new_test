import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  subtitle = environment.title;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoLogin() {
    this.router.navigate(['/en/auth']);
  }

}
