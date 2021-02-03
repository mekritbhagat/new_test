import { HttpErrorResponse } from '@angular/common/http';

export interface Currency {
  symbol: string;
  exchange: string;
  last: string;
  ccy: string;
  change: string;
  changePositive: boolean;
  changeNegative: boolean;
  changePercent: string;
}

export interface CurrencyState {
  symbol: string;
  loading: boolean;
  stock?: Currency;
  error?: HttpErrorResponse;
}
