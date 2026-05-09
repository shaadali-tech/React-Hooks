import { useState } from "react";
import useCounter from "./Components/UseCounter";
import { UserContext } from "./Components/USerContext";
import "./App.css";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <UserContext.Provider value={{ user: null }}>
        {/* Your app content */}
        <Child />
      </UserContext.Provider>
    </>
  );
}

export default App;
