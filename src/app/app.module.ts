import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule, SwPush, SwUpdate  } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { PagerrComponent } from './pagerr/pagerr.component';
import { CoresModule } from './core/core.module';
import { CoriModule } from './shared/core/core.module';
import { ViewModule } from './view/view.module';
import { RefreshModule } from './refresh/refresh.module';
import { LiveModule } from './live/live.module';
import { AboutModule } from './about/about.module';
import { QuoteModule } from './quote/quote.module';
import { CstateComponent } from './cstate/cstate.component';
import { HeaderComponent } from './header/header.component';
import { LeadersComponent } from './leaders/leaders.component';


@NgModule({
  declarations: [
    AppComponent,
    PagerrComponent,
    CstateComponent,
    HeaderComponent,
    LeadersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
    CoriModule,
    //ViewModule,
    AboutModule,
    RefreshModule,
    //QuoteModule,
    //LiveModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [CoresModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(update: SwUpdate, push: SwPush) {
  //   update.available.subscribe(update => {
  //     // const snack = snackbar.open('Update Available', 'Reload');
  //     // snack.onAction().subscribe(() => { window.location.reload(); });
  //   });
  //   push.messages.subscribe(msg => {snackbar.open(JSON.stringify(msg))});
  //   const key = '';
  //   push.requestSubscription({serverPublicKey: key}).then(PushSubscription => {})
  // }
}
