import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
      employees: [
        {
          name: "John Doe",
          designation: "SDE",
        },
        {
          name: "Jane Smith",
          designation: "QA",
        },
        {
          name: "Jack Dawson",
          designation: "SDE",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={() => {
          this.setState({ change: !this.state.change })
        }}>Click Here</button>

        {
          this.state.change ? (
            <h1>Welcome to redBus L&D</h1>
          ):
          (
            <h1>Welcome to redBus Interns Team</h1>
          )
        } */}
        <h1>Employees</h1>
        <ol>
          {this.state.employees.map((employee) => {
            return (
              <li>
                {employee.name}, {employee.designation}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
