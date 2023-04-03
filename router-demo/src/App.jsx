import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RouteAsObj from "./components/RouteAsObj";
import Search from "./components/search";


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/dashboard" activeClassName="active">Dashboard</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">About</Link>
          </li>
          <li>
            <Link to={"/object_route"}>Route as object</Link>
          </li>
          <li>
            <Link to={"/search"}>Search</Link>
          </li>
        </ul>
      </nav>

      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard/*" element={<Dashboard />}></Route>
          <Route path="/object_route/*" element={<RouteAsObj />}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export const Home = () =>{
  return (
    <div>You are home!</div>
  )
}


export const About = () =>{
  return (
    <div>You are at about!</div>
  )
}


export const NotFound = () =>{
  return (
    <div>404 Not Found!</div>
  )
}

export default App;
