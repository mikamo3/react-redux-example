import { put, select, take, takeEvery, call } from "@redux-saga/core/effects";
import { increment, decrement, returnValue } from "./incrementLib";
import * as incrementAsync from "./store/incrementAsync";
import { AppState } from "./store";
import { actions as asyncAction } from "./store/asyncSomething";
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

function* handleAsync(
  action: ReturnType<typeof asyncAction.asyncSomething.request>
) {
  const value: string = yield call(returnValue, action.payload);
  yield put(asyncAction.asyncSomething.success(value));
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
  yield takeEvery(asyncAction.asyncSomething.request, handleAsync);
}
