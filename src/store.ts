import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./store/index";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
const rootReducer = combineReducers(reducers);

export type AppState = ReturnType<typeof rootReducer>;
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
