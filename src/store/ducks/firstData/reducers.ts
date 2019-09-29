import { ActionType, createReducer } from "typesafe-actions";
import { FirstDataState } from "./types";

import * as actions from "./actions";
const initialState: FirstDataState = {
  data: []
};
type ActionTypes = ActionType<typeof actions>;
const reducer = createReducer<FirstDataState, ActionTypes>(initialState)
  .handleAction(
    [actions.fetchFirstData.request, actions.fetchFirstData.failure],
    state => state
  )
  .handleAction(actions.fetchFirstData.success, (state, action) => {
    return { data: action.payload };
  });

export default reducer;
