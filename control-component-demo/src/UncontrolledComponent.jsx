import { useRef } from "react";
import "./App.css";

export default function UncontrolledComponent() {
  const inputValueRef = useRef("");

  const buttonClicked = () => {
    alert(inputValueRef.current.value);
  };

  return (
    <div className="App">
      <input type={"text"} ref={inputValueRef} />
      <hr />
      <button onClick={buttonClicked}>Submit</button>
    </div>
  );
}
