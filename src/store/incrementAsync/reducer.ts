import * as actions from "./actions";
import { ActionType, createReducer } from "typesafe-actions";
const initialState: number = 0;
type IncrementAsyncActionType = ActionType<typeof actions>;
const incrementAsyncReducer = createReducer<number, IncrementAsyncActionType>(
  initialState
).handleAction(
  [
    actions.incrementAsync.request,
    actions.incrementAsync.failure,
    actions.decrementAsync.request,
    actions.decrementAsync.failure
  ],
  state => state
);
export default incrementAsyncReducer;
