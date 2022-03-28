import React from "react";
import { inc, dec, random } from "../Redux/action";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-primary" onClick={() => dispatch(inc())}>
        Increment +{" "}
      </button>
      <button className="btn btn-danger" onClick={() => dispatch(dec())}>
        decrement -{" "}
      </button>
      <button className="btn btn-info" onClick={() => dispatch(random())}>
        random#
      </button>
    </div>
  );
};


export default Counter;
