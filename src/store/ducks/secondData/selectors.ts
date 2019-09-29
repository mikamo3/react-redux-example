import { createSelector, Selector } from "reselect";
import { SecondData, SecondDataState } from "./types";
const secondDataSelector: Selector<SecondDataState, SecondData[]> = state =>
  state.data;
export const getAll = createSelector(
  [secondDataSelector],
  res => res
);
