import { createStandardAction, createAsyncAction } from "typesafe-actions";
export const incrementAsync = createAsyncAction(
  "INCREMENTASYNC_REQUEST",
  "INCREMENTASYNC_SUCCESS",
  "INCREMENTASYNC_FAILURE"
)<undefined, number, undefined>();

export const decrementAsync = createAsyncAction(
  "DECREMENTASYNC_REQUEST",
  "DECREMENTASYNC_SUCCESS",
  "DECREMENTASYNC_FAILURE"
)<undefined, number, undefined>();
