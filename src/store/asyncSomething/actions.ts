import { createAsyncAction } from "typesafe-actions";

export const asyncSomething = createAsyncAction(
  "ASYNC_REQUEST",
  "ASYNC_SUCCESS",
  "ASYNC_FAILURE"
)<string, string, undefined>();
