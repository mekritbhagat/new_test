import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BoardListComponent } from './board-list/board-list.component';

import { SharedModule } from '../../shared/shared.module';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: '', component: BoardListComponent
  },
];

@NgModule({
  declarations: [BoardListComponent, DisplayComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
