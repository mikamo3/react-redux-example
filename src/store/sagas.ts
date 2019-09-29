import { operations as firstDataOperation } from "./ducks/firstData";
import { operations as secondDataOperation } from "./ducks/secondData";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([...secondDataOperation.sagas, ...firstDataOperation.sagas]);
}
