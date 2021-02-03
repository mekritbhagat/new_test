import { LatestState } from './latest.model';
import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './latest.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: LatestState = {
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
  on(actionStockMarketRetrieveSuccess, (state, { stock }) => ({
    ...state,
    loading: false,
    stock,
    error: null
  })),
  on(actionStockMarketRetrieveError, (state, { error }) => ({
    ...state,
    loading: false,
    stock: null,
    error
  }))
);

export function latestReducer(
  state: LatestState | undefined,
  action: Action
) {
  return reducer(state, action);
}
