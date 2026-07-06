import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="count1">{count}</div>

      <div className="buttons">
        <button onClick={() => setCount((count) => count + 1)}>
          +1
        </button>

        <button onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}>
          -1
        </button>

        <button onClick={() => setCount(0)}>
          Reinitialize
        </button>
      </div>
    </div>
  );
}

export default App;