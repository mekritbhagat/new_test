import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  // {
  //   path: '', component: QuoteComponent
  // }
];

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [QuoteComponent]
})
export class QuoteModule { }
