import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Latest } from './latest.model';

export enum StockMarketActionTypes {
  RETRIEVE = '[Stock] Retrieve',
  RETRIEVE_SUCCESS = '[Stock] Retrieve Success',
  RETRIEVE_ERROR = '[Stock] Retrieve Error'
}

export const actionStockMarketRetrieve = createAction(
  StockMarketActionTypes.RETRIEVE,
  props<{ symbol: string }>()
);

export const actionStockMarketRetrieveSuccess = createAction(
  StockMarketActionTypes.RETRIEVE_SUCCESS,
  props<{ stock: Latest }>()
);

export const actionStockMarketRetrieveError = createAction(
  StockMarketActionTypes.RETRIEVE_ERROR,
  props<{ error: HttpErrorResponse }>()
);
