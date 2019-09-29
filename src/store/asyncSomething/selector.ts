import { createSelector, Selector } from "reselect";
import { AsyncState, AsyncData } from "./reducers";
const asyncSelector: Selector<AsyncState, AsyncData[]> = state => state.data;

const getAll = createSelector(
  [asyncSelector],
  data => data
);
export { getAll };
