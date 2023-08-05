import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/Slices/CounterSlice";

const Counter = () => {

  const count = useSelector((state) => state.counter.value );
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        >
        Increment
      </button>
      <br />
      <br />
      <div>
        {count}
      </div>
      <br />
      <br />
      <button
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
    )
};

export default Counter;
