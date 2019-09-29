import { fetchFirstData } from "./actions";
import { FirstData } from "./types";
import { call, put, takeEvery } from "redux-saga/effects";

//fetch処理
const fetch = () => {
  const resolveData: FirstData[] = [
    { id: 1, text: "foo" },
    { id: 2, text: "bar" },
    { id: 3, text: "baz" }
  ];
  return new Promise<FirstData[]>(resolve => {
    setTimeout(() => {
      resolve(resolveData);
    }, 1000);
  });
};

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
