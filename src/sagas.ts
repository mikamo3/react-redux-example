import { put, select, take, takeEvery, call } from "@redux-saga/core/effects";
import { increment, decrement } from "./incrementLib";
import * as incrementAsync from "./store/incrementAsync";
import { AppState } from "./store";

function* handleIncrement() {
  const state: AppState = yield select();
  const result: number = yield call(increment, state.incrementAsyncState);
  yield put(incrementAsync.actions.incrementAsync.success(result));
}
function* handleDecrement() {
  const state: AppState = yield select();
  const result: number = yield call(decrement, state.incrementAsyncState);
  yield put(incrementAsync.actions.decrementAsync.success(result));
}

export function* rootSaga() {
  yield takeEvery(
    incrementAsync.actions.incrementAsync.request,
    handleIncrement
  );
  yield takeEvery(
    incrementAsync.actions.decrementAsync.request,
    handleDecrement
  );
}
