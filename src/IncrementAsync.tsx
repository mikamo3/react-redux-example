import React, { useEffect } from "react";
import { AppState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/incrementAsync";
const numSelector = (state: AppState) => state.incrementAsyncState;
const IncrementAsync: React.FC = () => {
  const dispatch = useDispatch();
  const num = useSelector(numSelector);
  useEffect(() => {
    dispatch(actions.incrementAsync.request());
  }, [num]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(actions.incrementAsync.request());
        }}
      >
        +
      </button>
      <p>{num}</p>
      <button
        onClick={() => {
          dispatch(actions.decrementAsync.request());
        }}
      >
        -
      </button>
    </div>
  );
};
export default IncrementAsync;
