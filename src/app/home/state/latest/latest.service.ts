import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Latest } from './latest.model';

@Injectable()
export class LatestService {
  constructor() {}

  retrieveStock(symbol: string): Observable<Latest> {
    // would do HTTP  request but is hard to find reliable free stock quote API
    const result = this.buildResult(symbol);
    return of(result);
  }

  private buildResult(symbol: string): Latest {
    return {
      symbol,
      exchange: 'Nasdaq',
      last: '124',
      ccy: 'USD',
      change: '1',
      changePositive: true,
      changeNegative: false,
      changePercent: '0.81'
    };
  }
}
