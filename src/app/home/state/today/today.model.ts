import { HttpErrorResponse } from '@angular/common/http';

export interface Today {
  symbol: string;
  exchange: string;
  last: string;
  ccy: string;
  change: string;
  changePositive: boolean;
  changeNegative: boolean;
  changePercent: string;
}

export interface TodayState {
  symbol: string;
  loading: boolean;
  stock?: Today;
  error?: HttpErrorResponse;
}
