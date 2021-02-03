import { TodayState } from './today.model';
import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './today.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: TodayState = {
  symbol: 'GOOGL',
  loading: false
};

const reducer = createReducer(
  initialState,
  on(actionStockMarketRetrieve, (state, { symbol }) => ({
    ...state,
    loading: true,
    stock: null,
    error: null,
    symbol
  })),
  on(actionStockMarketRetrieveSuccess, (state, { today }) => ({
    ...state,
    loading: false,
    today,
    error: null
  })),
  on(actionStockMarketRetrieveError, (state, { error }) => ({
    ...state,
    loading: false,
    stock: null,
    error
  }))
);

export function todayReducer(
  state: TodayState | undefined,
  action: Action
) {
  return reducer(state, action);
}
