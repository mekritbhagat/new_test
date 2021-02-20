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

  subtitle = environment.neTitle;
  menus = ["प्रसारण", "विश्व", "खेलकुद", "व्यापार", "मनोरञ्जन", "प्रविधिहरू", "जीवनशैली", "खाना र संस्कृति", "विश्व नेताहरु", "ट्विटर राय", "लेख", "सम्पर्क", "राजनीति"];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoLogin() {
    this.router.navigate(['/en/auth']);
  }

  connectToOfficial() {
    this.router.navigate(['/about']);
  }

}
