import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';

import { ViewComponent } from './view.component';
import { SharedModule } from '../shared/shared.module';
import { FillComponent } from './fill/fill.component';



const routes: Routes = [
  {
    path: '', component: ViewComponent, data: {}
  }
];
@NgModule({
  declarations: [ViewComponent, FillComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatNativeDateModule,
    RouterModule.forChild(routes),
  ],
  //entryComponents: [FillComponent]
})
export class ViewModule { }
