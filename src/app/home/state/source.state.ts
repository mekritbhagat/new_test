import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../shared/core/core.module';

import { latestReducer } from '../state/latest/latest.reducer';
import { LatestState } from '../state/latest/latest.model';
import { currencyReducer } from '../state/currency/currency.reducer';
import { CurrencyState } from '../state/currency/currency.model';
import { todayReducer } from '../state/today/today.reducer';
import { TodayState } from '../state/today/today.model';
import { stockReducer } from '../state/stockmarket/market.reducer';
import { StockState } from '../state/stockmarket/market.model';


export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  todos: stockReducer,
  stocks: stockReducer,
  books: latestReducer,
  form: currencyReducer
};

export interface ExamplesState {
  todos: TodayState;
  stocks: StockState;
  form: LatestState;
  books: CurrencyState;
}

export interface State extends AppState {
  examples: ExamplesState;
}
