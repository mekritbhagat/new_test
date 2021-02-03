import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ELekhComponent } from './e-lekh.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmComponent } from './confirm/confirm.component';


const routes: Routes = [
  {
    path: '', component: ELekhComponent
  }
];
@NgModule({
  declarations: [EditComponent, ELekhComponent, ConfirmComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ELekhModule { }
