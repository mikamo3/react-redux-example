import * as actions from "./actions";
import { ActionType, createReducer } from "typesafe-actions";
const initialState: number = 0;
type IncrementActionType = ActionType<typeof actions>;
const incrementReducer = createReducer<number, IncrementActionType>(
  initialState
)
  .handleAction(actions.increment, state => state + 1)
  .handleAction(actions.decrement, state => state - 1);

export default incrementReducer;
