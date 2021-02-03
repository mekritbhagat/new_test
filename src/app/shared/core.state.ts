import {
    ActionReducerMap,
    MetaReducer,
    createFeatureSelector
  } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
  
import { environment } from '../../environments/environment';
  
import { initStateFromLocalStorage } from './local-storage.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './mgt/setting.reducer';
import { SettingsState } from './mgt/setting.model';
  
export const reducers: ActionReducerMap<AppState> = {
    settings: settingsReducer,
    router: routerReducer
};
  
export const metaReducers: MetaReducer<AppState>[] = [
    initStateFromLocalStorage
];
  
  
export const selectSettingsState = createFeatureSelector<
    AppState,
    SettingsState
>('settings');
  
export const selectRouterState = createFeatureSelector<
    AppState,
    RouterReducerState<RouterStateUrl>
>('router');
  
export interface AppState {
    settings: SettingsState;
    router: RouterReducerState<RouterStateUrl>;
}
  