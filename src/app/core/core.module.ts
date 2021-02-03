import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { FileupComponent } from './fileup/fileup.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },  {
    path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'post'
  }

];

@NgModule({
  declarations: [ProfileComponent, FileupComponent, NotificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminModule,
    // AuthModule,
    // PostModule,
    RouterModule.forChild(routes)
  ],
  exports: [FileupComponent]
})
export class CoresModule { }
