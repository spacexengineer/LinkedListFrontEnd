import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import Navbar from "./Navbar";
import Main from "./Main";
import jwtDecode from "jwt-decode";

debugger;
const store = configureStore();

if (localStorage.jwtToken) {
  debugger;
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually setting a key of 'jwtToken' in localStorage
  try {
    debugger;
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}
debugger;
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
