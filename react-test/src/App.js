import logo from './logo.svg';
import {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0
    }

    this.ClickMe = this.ClickMe.bind(this);
  }

  ClickMe() {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
    
  }

  render() {
  return (
    <div>
    <button id="clickme" className='clickme' onClick={this.ClickMe}>Click Me</button>
    <p>You clicked ths button {this.state.clickCount} times</p>
    </div>
  )
  }
}

export default App;
