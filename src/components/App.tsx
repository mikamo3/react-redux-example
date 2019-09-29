import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/store";
import MainView from "./MainView";
const store = configureStore();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

export default App;
