import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../source.state';

export const selectStockMarket = createSelector(
  selectExamples,
  (state: ExamplesState) => state.stocks
);
