import { useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUser, setShowUser] = useState("");

  const handleSubmit = (e) => {
    setShowUser(false);
    e.preventDefault();
    if (validateEmail(email)) {
      setShowUser(true);
      setError("");
      return;
    }
    setError("Email is invalid");
    return false;
  };

  // let's write a function to reset the form
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShowUser(false);
  };

  return (
    <>
      <h2>We will test the login</h2>
      {showUser && (
        <Alert data-testid="user" variant="warning">
          {email}
        </Alert>
      )}
      {error && (
        <Alert data-testid="error" variant="danger">
          {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="foemBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button data-testid="submit" variant="primary" type="submit">
          Submit
        </Button>

        <Button
          variant="secondary"
          data-testid="reset"
          onClick={resetForm}
          style={{ marginLeft: "5px" }}
        >
          Reset
        </Button>
      </Form>
    </>
  );
};

export const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export default Login;
