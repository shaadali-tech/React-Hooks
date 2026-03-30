import { useState } from "react";
import useCounter from "./Components/UseCounter";

import "./App.css";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
