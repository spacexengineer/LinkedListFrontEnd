import rootReducer from "../store/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// debugger;
export function configureStore() {
  // debugger;
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}
