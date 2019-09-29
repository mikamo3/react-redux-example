import React from "react";
import useIncrement from "./Inc.hooks";
const Inc: React.FC = () => {
  const { incNum, incAsyncNum } = useIncrement();
  return (
    <div>
      <div>num: {incNum}</div>
      <div>asyncnum: {incAsyncNum}</div>
    </div>
  );
};
export default Inc;
