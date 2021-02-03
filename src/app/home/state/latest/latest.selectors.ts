import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../source.state';

export const LatestMarket = createSelector(
  selectExamples,
  (state: ExamplesState) => state.stocks
);
