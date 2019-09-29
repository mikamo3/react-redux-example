import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
type AsyncActionType = ActionType<typeof actions>;
export interface AsyncData {
  value: string;
}
export interface AsyncState {
  data: AsyncData[];
}
const initialState: AsyncState = {
  data: []
};
const asyncReducer = createReducer<AsyncState, AsyncActionType>(initialState)
  .handleAction(
    [actions.asyncSomething.request, actions.asyncSomething.failure],
    state => state
  )
  .handleAction(actions.asyncSomething.success, (state, actions) => ({
    data: [...state.data, { value: actions.payload }]
  }));

export default asyncReducer;
