import { Fragment } from "react";
import "./App.css";

function App() {
  const countries = [
    {
      id: '1',
      name: 'India',
      currency: 'INR'
    },
    {
      id: '2',
      name: 'USA',
      currency: 'USD'
    },
    {
      id: '3',
      name: 'Japan',
      currency: 'YEN'
    }
  ]
  return (
    <div className="App">
      {
        countries.map(item => {
          return(
          <Fragment key={item.id}>
            <h3>Name of the country: {item.name}</h3>
            <h4>Currency: {item.currency}</h4>
          </Fragment>
          )
        })
      }
    </div>
  );
}

export default App;
