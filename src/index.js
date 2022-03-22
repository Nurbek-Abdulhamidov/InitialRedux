import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const initialState = {
  value: 0,
  name: "Nurbek",
  age: 21,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RANDOM":
      return {
        ...state,
        value:state.value * action.payload
      }
    default:
      return state;
  }
};

const store = createStore(reducer);
const update = () => {
  document.getElementById("counter").textContent = store.getState().value;
};
store.subscribe(update);

const inc = () => ({ type: "INCREMENT" });
const dec = () => ({ type: "DECREMENT" });
const random = (number) => ({ type: "RANDOM", payload: number });

document.getElementById("increment").addEventListener("click", () => {
  store.dispatch(inc());
});

document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch(dec());
});

document.getElementById("random").addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 10);
  store.dispatch(random(randomValue));
});

ReactDOM.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>,
  document.getElementById("root")
);
