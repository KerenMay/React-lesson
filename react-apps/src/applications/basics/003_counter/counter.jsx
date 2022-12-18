import { useState } from "react";

function Counter() {
  //Hooks
  //State

  let [counter, setCounter] = useState(0);
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

  if (counter > 0) {
    return (
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <h2>{counter}</h2>
      </div>
    );
  } else if (counter === 0) {
    return (
      <div>
        <button onClick={increment}>+</button>
        <button disabled={true}>-</button>
        <h2>{counter} - this is the lowest point</h2>
      </div>
    );
  }
}

export default Counter;
