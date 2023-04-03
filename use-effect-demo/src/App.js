import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count2} times`);
  }, [count2]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked me {count} times</p>
      <hr />
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
      <p>You clicked me {count2} times</p>
    </div>
  );
}

export default App;
