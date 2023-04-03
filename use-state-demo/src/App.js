import './App.css';
import {useState} from 'react' 

function App() {

  const [name, setName] = useState("")
  const changeName = () => {
    const newName = document.getElementById('name-inp').value;
    setName(newName)
  }
  return (
    <div className="App">
      <input type="text" name="Name" placeholder="Your Name" id="name-inp"/>
      <button onClick={changeName} >Change name</button> 
      {
        name !== "" ?
        <p>My name is {name}</p>
        : 
        <p>We need your name</p>
      }
      <br />
    </div>
  );
}

export default App;
