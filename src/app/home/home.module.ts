import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { HomeComponent } from './home.component';
import { HomeLatestComponent } from './home-latest/home-latest.component';
import { TodayNewsComponent } from './today-news/today-news.component';
import { SharedModule } from '../shared/shared.module';
import { StmarketComponent } from './stmarket/stmarket.component';
import { CurrencyComponent } from './currency/currency.component';
import { QuoteModule } from '../quote/quote.module';

export const BreakPointProvider = {
  provide: BREAKPOINTS,
  useValue: DEFAULT_BREAKPOINTS,
  multi: true
};

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
  // {
  //   path: '', redirectTo: '/home'
  // }
];

@NgModule({
  declarations: [HomeComponent, HomeLatestComponent, TodayNewsComponent, StmarketComponent, CurrencyComponent],
  imports: [
    CommonModule,
    SharedModule,
    QuoteModule,
    RouterModule.forChild(routes)
  ],
  providers: [BreakPointProvider],
  exports: [RouterModule]
})
export class HomeModule { }
