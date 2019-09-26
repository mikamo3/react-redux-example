import React from "react";
import logo from "./logo.svg";
import Increment from "./Increment";
import IncrementAsync from "./IncrementAsync";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Increment />
      <IncrementAsync />
    </Provider>
  );
};

export default App;
