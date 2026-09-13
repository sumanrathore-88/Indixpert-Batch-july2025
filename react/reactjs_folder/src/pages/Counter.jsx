
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increaseByOne = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Cannot go above 10");
    }
  };

  const decreaseByOne = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Cannot go below 0");
    }
  };

  const increaseByTwo = () => {
    if (count <= 8) {
      setCount(count + 2);
    } else {
      alert("Cannot go above 10");
    }
  };

  const decreaseByTwo = () => {
    if (count >= 2) {
      setCount(count - 2);
    } else {
      alert("Cannot go below 0");
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter (useState)</h1>
      <h2>{count}</h2>

      <button onClick={increaseByOne}>+1</button>
      <button onClick={decreaseByOne}>-1</button>
      <button onClick={increaseByTwo}>+2</button>
      <button onClick={decreaseByTwo}>-2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}