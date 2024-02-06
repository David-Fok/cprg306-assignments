"use client";

import { useState } from "react";

export default function Counter() {
  //let a = 0;
  const [count, setCount] = useState(0);
  //useState(0) returns an array with two elements:
  //the first element is the current value of the state
  //the second element is a function to update the state
  //only change setCount, never change count directly
  //count = count + 1; //wrong

  function increment() {
    //a++;
    setCount(count + 1);
  }
  //console.log(a);

  return (
    <div>
      <h1>Counter</h1>

      <h1>{count}</h1>

      {count > 10 && <h1>Count is greater than 10</h1>}
      {/* because when count < 10 which is false, the second part will not call/check */}

      {count === 5 ? <p>count is 5</p> : <p>NOT 5</p>}
      {/* if count === 5, return <p>count is 5</p>, otherwise, return <p>count is not 5</p> */}

      <button
        onClick={increment}
        className="bg-blue-500 p-2 m-1 rounded-md hover:bg-blue-300 active:bg-yellow-300"
      >
        Increment
      </button>
    </div>
  );
}
