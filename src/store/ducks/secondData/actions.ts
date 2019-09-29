import { createAsyncAction } from "typesafe-actions";
import { SecondData } from "./types";

export const fetchSecondData = createAsyncAction(
  `FETCH_SECONDDATA_REQUEST`,
  `FETCH_SECONDDATA_SUCCESS`,
  `FETCH_SECONDDATA_FAILURE`
)<{ id: number; text: string }, SecondData, undefined>();
