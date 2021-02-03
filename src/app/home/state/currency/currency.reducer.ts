import { CurrencyState } from './currency.model';
import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './currency.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: CurrencyState = {
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
  on(actionStockMarketRetrieveSuccess, (state, { currency }) => ({
    ...state,
    loading: false,
    currency,
    error: null
  })),
  on(actionStockMarketRetrieveError, (state, { error }) => ({
    ...state,
    loading: false,
    stock: null,
    error
  }))
);

export function currencyReducer(
  state: CurrencyState | undefined,
  action: Action
) {
  return reducer(state, action);
}
