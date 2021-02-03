import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../../home/state/source.state';

export const Currencys = createSelector(
  selectExamples,
  (state: ExamplesState) => state.stocks
);
