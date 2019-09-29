import React from "react";
import useData from "./MainView.hooks";
const MainView: React.FC = () => {
  const dataForView = useData();
  return (
    <div>
      {dataForView.map(firstData => (
        <div key={firstData.id}>
          <div>id: {firstData.id}</div>
          <div>text: {firstData.text}</div>
          {firstData.secondData.map(secondData => (
            <div key={secondData.id}> {secondData.text}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default MainView;
