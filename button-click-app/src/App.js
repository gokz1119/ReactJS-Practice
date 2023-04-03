import logo from './logo.svg';
import './App.css';

function App() {
  function greet() {
    alert('Hello')
  }
  return (
    <div className="App">
      <button onClick={greet}>Click me</button>
    </div>
  );
}

export default App;
