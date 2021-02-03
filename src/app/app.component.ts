import browser from 'browser-detect';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { environment as env } from '../environments/environment';

import {
  AppState,
  LocalStorageService,
  selectSettingsLanguage,
  selectEffectiveTheme
} from './shared/core/core.module';

import {
  ActionSettingsChangeAutoNightMode,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeTheme
} from './shared/mgt/setting.actions';
import { SettingsState, State } from './shared/mgt/setting.model';
import { selectSettings } from './shared/mgt/setting.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, OnDestroy {

  settings$: Observable<SettingsState>;

  themes = [
    { value: 'DEFAULT-THEME', label: 'blue' },
    { value: 'LIGHT-THEME', label: 'light' },
    { value: 'NATURE-THEME', label: 'nature' },
    { value: 'BLACK-THEME', label: 'dark' }
  ];
  news = 'Latest: ';
  isProd = env.production;
  year = new Date().getFullYear();
  //logo = require('../../assets/logo.png');
  languages = ['en', 'ne', 'bh', 'hi'];
  language = [
    { label: 'en', value: 'en' },
    { label: 'ne', value: 'ne' },
    { label: 'bh', value: 'bh' },
    { label: 'hi', value: 'hi' }
  ];
  navigation = [
    { link: 'about', label: 'about' },
    { link: 'category', label: 'category' },
    { link: 'auth', label: 'auth' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'setting', label: 'setting' }
  ];

  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;
  mediaSubscription: Subscription;
  deviceXs: boolean;

  constructor(
    private mediaObserver: MediaObserver,
    private store: Store<AppState>,
    private stores: Store<State>,
    private storageService: LocalStorageService
  ) {}

  // private static isIEorEdgeOrSafari() {
  //   return ['ie', 'edge', 'safari'].includes(browser().name);
  // }

  ngOnInit(): void {
    this.mediaSubscription = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
    this.storageService.testLocalStorage();
    // if (AppComponent.isIEorEdgeOrSafari()) {
    //   //this.store.dispatch('');
    // }
    this.settings$ = this.stores.pipe(select(selectSettings));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }

  onLoginClick() {
    //this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    //this.store.dispatch(authLogout());
  }

  onThemeSelect({ value: theme }) {
    this.stores.dispatch(new ActionSettingsChangeTheme({ theme }));
  }

  onAutoNightModeToggle({ checked: autoNightMode }) {
    this.stores.dispatch(
      new ActionSettingsChangeAutoNightMode({ autoNightMode })
    );
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }
}
