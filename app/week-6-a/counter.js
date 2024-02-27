"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    //count = count + 1; //This line is the problem. It should be setCount(count + 1);
    //because count is a state variable, it should be updated using the setCount function.
    //alert(count);
    // setCount(count + 1); // setCount(1);
    // setCount(count + 1); // setCount(1); // The value of count is not updated yet

    // setCount((prevCount) => prevCount + 1); // This is the correct way to update the state variable
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
