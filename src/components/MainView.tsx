import React from "react";
import useData from "./MainView.hooks";

// テストしやすくするためにdata-testというattributeをテスト対象に付与している
// https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change
// プロダクション環境でこれが出ると格好わるいので
//https://github.com/oliviertassinari/babel-plugin-react-remove-properties
// とかで除去してやるのが良いかも(試してない)
const MainView: React.FC = () => {
  const dataForView = useData();
  return (
    <div>
      {dataForView.map(firstData => (
        <div key={firstData.id}>
          <div data-test={`first-data-${firstData.id}`}>
            id: {firstData.id} text: {firstData.text}
          </div>
          {firstData.secondData.map(secondData => (
            <div key={secondData.id} data-test={`second-data-${secondData.id}`}>
              {secondData.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default MainView;
