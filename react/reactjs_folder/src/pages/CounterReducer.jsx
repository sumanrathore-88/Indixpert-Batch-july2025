
import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INC_1":
      if (state < 10) return state + 1;
      alert("Cannot go above 10");
      return state;

    case "DEC_1":
      if (state > 0) return state - 1;
      alert("Cannot go below 0");
      return state;

    case "INC_2":
      if (state <= 8) return state + 2;
      alert("Cannot go above 10");
      return state;

    case "DEC_2":
      if (state >= 2) return state - 2;
      alert("Cannot go below 0");
      return state;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter (useReducer)</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "INC_1" })}>+1</button>
      <button onClick={() => dispatch({ type: "DEC_1" })}>-1</button>
      <button onClick={() => dispatch({ type: "INC_2" })}>+2</button>
      <button onClick={() => dispatch({ type: "DEC_2" })}>-2</button>
      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}