import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const incrementNumber = () => {
    setCount(count + 1);
  };

  const decrementNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetNumber = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="count-box p-3">
        <h3 pt-2>React Count App</h3>
        <h1 className="mt-5">{count}</h1>
        <button className="btn btn-primary m-2 plus" onClick={incrementNumber}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <button className="btn btn-primary m-2 reset" onClick={resetNumber}>
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button className="btn btn-primary m-2 minus" onClick={decrementNumber}>
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
        
      </div>
    </div>
  );
}

export default App;
