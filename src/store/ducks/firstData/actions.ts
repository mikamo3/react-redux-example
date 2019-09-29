import { createAsyncAction } from "typesafe-actions";
import { FirstData } from "./types";

export const fetchFirstData = createAsyncAction(
  `FETCH_FIRSTDATA_REQUEST`,
  `FETCH_FIRSTDATA_SUCCESS`,
  `FETCH_FIRSTDATA_FAILURE`
)<undefined, FirstData[], undefined>();
