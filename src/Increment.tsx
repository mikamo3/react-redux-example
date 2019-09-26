import React from "react";
import { actions } from "./store/increment";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store";

const Increment: React.FC = () => {
  const dispatch = useDispatch();
  const num = useSelector((state: AppState) => state.incrementState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(actions.increment());
        }}
      >
        +
      </button>
      <p>{num}</p>
      <button
        onClick={() => {
          dispatch(actions.decrement());
        }}
      >
        -
      </button>
    </div>
  );
};
export default Increment;
