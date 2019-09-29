import React from "react";
import useAsync from "./Async.hooks";

const Async: React.FC = () => {
  const asyncData = useAsync();
  return (
    <div>
      {asyncData.map(data => (
        <div>{data.value}</div>
      ))}
    </div>
  );
};
export default Async;
