import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../../../environments/environment';

import {
  AppState,
  reducers,
  metaReducers,
  selectRouterState
} from '../core.state';
import { TitleService } from '../title.service';
import { CustomSerializer } from '../router/custom-serializer';
import { LocalStorageService } from '../local-storage.service';
import { NotificationService } from '../notifications.service';
import { SettingsEffects } from '../mgt/setting.effects';
import {
  selectSettingsLanguage,
  selectEffectiveTheme,
} from '../mgt/setting.selectors';
import {
  SettingsActions,
  SettingsActionTypes,
  ActionSettingsChangeLanguage
} from '../mgt/setting.actions';

export {
  TitleService,
  AppState,
  LocalStorageService,
  selectRouterState,
  NotificationService,
  SettingsActions,
  SettingsActionTypes,
  ActionSettingsChangeLanguage,
  selectEffectiveTheme,
  selectSettingsLanguage
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/locales/`,
    '.json'
  );
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      SettingsEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'Angular NgRx Material Starter'
        }),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  exports: [TranslateModule]
})
export class CoriModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoriModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
