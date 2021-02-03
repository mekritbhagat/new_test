import { HttpErrorResponse } from '@angular/common/http';

export interface Latest {
  symbol: string;
  exchange: string;
  last: string;
  ccy: string;
  change: string;
  changePositive: boolean;
  changeNegative: boolean;
  changePercent: string;
}

export interface LatestState {
  symbol: string;
  loading: boolean;
  stock?: Latest;
  error?: HttpErrorResponse;
}
