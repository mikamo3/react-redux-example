import { createSelector, Selector } from "reselect";
import { FirstData, FirstDataState } from "./types";
const firstDataSelector: Selector<FirstDataState, FirstData[]> = state =>
  state.data;

export const getAll = createSelector(
  [firstDataSelector],
  res => {
    return res;
  }
);
export const getAllId = createSelector(
  [firstDataSelector],
  res => {
    return res.map(r => r.id);
  }
);
