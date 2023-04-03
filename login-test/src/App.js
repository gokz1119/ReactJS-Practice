import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="Container app-container" role="parent">
      <Row>
        <h1>This is react testing example</h1>
      </Row>

      <Row>
        <Col>
          <Login data-testid="child" />
        </Col>
      </Row>
    </div>
  );
};

export default App;
