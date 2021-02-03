import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators';

import { LocalStorageService } from '../../../shared/core/core.module';

import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './latest.actions';
import { LatestService } from './latest.service';

export const STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';

@Injectable()
export class StockMarketEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private service: LatestService
  ) {}

  retrieveStock = createEffect(() => ({ debounce = 500 } = {}) =>
    this.actions$.pipe(
      ofType(actionStockMarketRetrieve),
      tap(action =>
        this.localStorageService.setItem(STOCK_MARKET_KEY, {
          symbol: action.symbol
        })
      ),
      debounceTime(debounce),
      switchMap(action =>
        this.service.retrieveStock(action.symbol).pipe(
          map(stock => actionStockMarketRetrieveSuccess({ stock })),
          catchError(error => of(actionStockMarketRetrieveError({ error })))
        )
      )
    )
  );
}
