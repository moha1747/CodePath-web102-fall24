import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyUpgrade = (cost, mult) => {
    if (count >= cost) {
      setMultiplier(multiplier * mult);
      setCount(count - cost);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa-Selecter</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="https://www.scrumptiously.com/wp-content/uploads/2024/02/ChickenSamosa.webp"
          onClick={updateCount}
        />
      </div>

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuff</h3>
          <p>2X per Click</p>
          <button onClick={() => buyUpgrade(10, 2)}>10 Samoas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack</h3>
          <p>5X per Click</p>
          <button onClick={() => buyUpgrade(100, 5)}>100 Samoas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast</h3>
          <p>10X per Click</p>
          <button onClick={() => buyUpgrade(1000, 10)}>1000 Samoas</button>
        </div>
      </div>
    </div>
  );
}

export default App;
