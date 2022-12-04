import { useState } from "react";

function Counter() {
  //Hooks
  //State

  const [counter, setCounter] = useState(0);
  console.log("counter is rendering");

  function increment() {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log("increment", newCounter);
  }

  function decrement() {
    const decCounter = counter - 1;
    setCounter(decCounter);
    console.log("decrement", decCounter);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default Counter;