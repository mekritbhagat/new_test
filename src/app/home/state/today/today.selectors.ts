import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../source.state';

export const TodayMarket = createSelector(
  selectExamples,
  (state: ExamplesState) => state.stocks
);
