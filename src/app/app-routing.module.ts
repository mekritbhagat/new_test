import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagerrComponent } from './pagerr/pagerr.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'ct', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'lekh', loadChildren: () => import('./e-lekh/e-lekh.module').then(m => m.ELekhModule)
  },
  {
    path: 'view', loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
  },
  {
    path: 'live', loadChildren: () => import('./live/live.module').then(m => m.LiveModule)
  },
  {
    path: 'en', loadChildren: () => import('./core/core.module').then(m => m.CoresModule)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'view', component: ViewComponent
  },
  {
    path: '**', component: PagerrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
