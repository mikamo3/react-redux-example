import React, { useState } from "react";
import { actions } from "./store/increment";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store";

const hooks = () => {
  const [hoge, setHoge] = useState();
  const dispatch = useDispatch();
  const num = useSelector((state: AppState) => state.incrementState);
  const increment = dispatch(actions.increment());
  const decrement = dispatch(actions.decrement);
  return { num, increment, decrement };
};

const Increment: React.FC = () => {
  const { num, increment, decrement } = hooks();
  const dispatch = useDispatch();
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
