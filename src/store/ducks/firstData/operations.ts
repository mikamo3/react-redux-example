import { fetchFirstData } from "./actions";
import { FirstData } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchFirstData as fetch } from "../../../service/api";

function* handleRequestFirstdata(
  action: ReturnType<typeof fetchFirstData.request>
) {
  const receivedData: FirstData[] = yield call(fetch);
  yield put(fetchFirstData.success(receivedData));
}

export const sagas = [
  takeEvery(fetchFirstData.request, handleRequestFirstdata)
];
export const fetchFirstDataRequest = fetchFirstData.request;
