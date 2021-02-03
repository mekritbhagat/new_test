import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { selectStockMarket } from '../state/stockmarket/market.selectors';
import { actionStockMarketRetrieve } from '../state/stockmarket/market.actions';
import { StockState } from '../state/stockmarket/market.model';
import { State } from '../state/source.state';
@Component({
  selector: 'app-stmarket',
  templateUrl: './stmarket.component.html',
  styleUrls: ['./stmarket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StmarketComponent implements OnInit {

  stocks$: Observable<StockState>;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.stocks$ = this.store.pipe(select(selectStockMarket));
    this.stocks$
      .pipe(take(1))
      .subscribe(stocks => this.onSymbolChange(stocks.symbol));
  }

  onSymbolChange(symbol: string) {
    this.store.dispatch(actionStockMarketRetrieve({ symbol }));
  }

}

