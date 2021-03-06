import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./Redux/reducer";
import App from "./components/App";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const { dispatch, getState, subscribe } = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
