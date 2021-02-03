import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatVideoModule } from 'mat-video';
import { LiveComponent } from './live.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LiveComponent
  }
];

@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    // SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LiveModule { }
