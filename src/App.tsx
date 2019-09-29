import React from "react";
import logo from "./logo.svg";
import Increment from "./Increment";
import IncrementAsync from "./IncrementAsync";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Inc from "./Inc";
import Todo from "./Todo";
import Async from "./Async";

const store = configureStore();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Todo />
      <Async />
    </Provider>
  );
};

export default App;
