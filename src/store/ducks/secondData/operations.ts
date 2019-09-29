import { fetchSecondData } from "./actions";
import { SecondData } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";

//fetch処理
let id = 0;
const fetch = (firstDataId: number, text: string) => {
  id++;
  return new Promise<SecondData>(resolve => {
    setTimeout(() => {
      resolve({ firstDataId: firstDataId, id: id, text: text });
    }, 1000);
  });
};

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
