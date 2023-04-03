import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  const userNameChanged = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="App">
      <div>User Name: {userName}</div>
      <input name="user-name" value={userName} onChange={userNameChanged} />
    </div>
  );
}

export default App;
