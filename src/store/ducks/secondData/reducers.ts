import { ActionType, createReducer } from "typesafe-actions";
import { SecondDataState } from "./types";

import * as actions from "./actions";
const initialState: SecondDataState = {
  data: []
};
type ActionTypes = ActionType<typeof actions>;
const reducer = createReducer<SecondDataState, ActionTypes>(initialState)
  .handleAction(
    [actions.fetchSecondData.request, actions.fetchSecondData.failure],
    state => state
  )
  .handleAction(actions.fetchSecondData.success, (state, action) => {
    return { data: [...state.data, action.payload] };
  });

export default reducer;
