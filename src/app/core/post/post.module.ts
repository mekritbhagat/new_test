import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../../shared/shared.module';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

const routes: Routes = [
  {
    path: '', component: PostComponent,
    children: [
      {
        path: 'edit/:id', component: EditComponent
      },
      {
        path: 'trash/:id', component: DeleteComponent
      }
    ]
  },
  {
    path: 'list', component: PostListComponent, data: {}
  },
  // {
  //   path: '', redirectTo: '/post'
  // }
];

@NgModule({
  declarations: [PostComponent, EditComponent, DeleteComponent, PostListComponent, PostDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule { }
