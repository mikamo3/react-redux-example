import { fetchSecondData } from "./actions";
import { SecondData } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";

import { fetchSecondData as fetch } from "../../../service/api";
function* handleRequestFirstdata(
  action: ReturnType<typeof fetchSecondData.request>
) {
  const receivedData: SecondData = yield call(
    fetch,
    action.payload.id,
    action.payload.text
  );
  yield put(fetchSecondData.success(receivedData));
}

export const sagas = [
  takeEvery(fetchSecondData.request, handleRequestFirstdata)
];
export const fetchFirstDataRequest = fetchSecondData.request;
