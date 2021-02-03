import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { SharedModule } from '../shared/shared.module';
import { CssGridAreaDirective } from './cssgridarea.directive';
import { CssGridDirective } from './cssgrid.directive';
// import { AdvertisementModule } from './advertisement/advertisement.module';
// import { GlobalModule } from './global/global.module';
// import { LifestyleModule } from './lifestyle/lifestyle.module';
// import { MajorModule } from './major/major.module';
// import { SportsModule } from './sports/sports.module';
// import { StoryModule } from './story/story.module';
import { MediaQueryComponent } from './media-query.component';
import { EntertainComponent } from './entertain/entertain.component';
import { GlobalComponent } from './global/global.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PrabidhiComponent } from './prabidhi/prabidhi.component';
import { SportsComponent } from './sports/sports.component';
import { StoryComponent } from './story/story.component';
import { BusinnessComponent } from './businness/businness.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { ScrollListComponent } from './scroll-list/scroll-list.component';
import { GreetComponent } from './greet/greet.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  // {
  //   path: 'story', loadChildren: () => import('./story/story.module').then(m => m.StoryModule)
  // },
  // {
  //   path: 'business', loadChildren: () => import('./businness/businness.module').then(m => m.BusinnessModule)
  // },
  // {
  //   path: 'entertain', loadChildren: () => import('./entertain/entertain.module').then(m => m.EntertainModule)
  // },
  // {
  //   path: 'global', loadChildren: () => import('./global/global.module').then(m => m.GlobalModule)
  // },
  // {
  //   path: 'lifestyle', loadChildren: () => import('./lifestyle/lifestyle.module').then(m => m.LifestyleModule)
  // },
  // {
  //   path: 'sports', loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule)
  // },
  // {
  //   path: 'technology', loadChildren: () => import('./prabidhi/prabidhi.module').then(m => m.PrabidhiModule)
  // },
  // {
  //   path: 'advert', loadChildren: () => import('./advertisement/advertisement.module').then(m => m.AdvertisementModule)
  // },
  {
    path: 'cate', component: CategoryComponent,
    children: [
      {
        path: 'busi', component: BusinnessComponent
      },
      {
        path: 'entertain', component: EntertainComponent
      },
      {
        path: 'global', component: GlobalComponent
      },
      {
        path: 'lifestyle', component: LifestyleComponent
      },
      {
        path: 'prabidhi', component: PrabidhiComponent
      },
      {
        path: 'sport', component: SportsComponent
      },
      {
        path: 'story', component: StoryComponent
      },
      {
        path: 'food', component: FoodComponent
      }
    ]
  },
  {
    path: '', redirectTo: '/cate', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CategoryComponent, MediaQueryComponent, EntertainComponent, GlobalComponent, LifestyleComponent, PrabidhiComponent, SportsComponent, StoryComponent, BusinnessComponent, GridItemComponent, ScrollListComponent, GreetComponent, FoodComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),

    // AdvertisementModule,
    // GlobalModule,
    // LifestyleModule,
    // MajorModule,
    // SportsModule,

    // CssGridAreaDirective,
    // CssGridDirective,
  ],
  exports: [MediaQueryComponent, GridItemComponent, ScrollListComponent]
})
export class CategoryModule { }
