import { Component } from "react";

const regExp = RegExp(/[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-zA-Z]/);

const formValid = ({ isError, ...rest }) => {
  let isValid = false;
  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  return isValid;
};

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isError: {
        name: "",
        email: "",
        password: "",
      },
    };
  }

  onSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(this.state);
    } else {
      console.log("Form is invalid");
    }
  }

  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name =
          value.length < 4 ? "Name requires atleast 4 characters" : "";
        break;
      case "email":
        isError.email = regExp.test(value) ? "" : "Email is invalid";
        break;
      case "password":
        isError.password =
          value.length < 8 ? "Password requires atleast 8 characters" : "";
        break;
      default:
        break;
    }
    this.setState({ isError, [name]: value });
  }

  render() {
    const { isError } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              className={
                isError.name.length > 0
                  ? "is-invalid form-control"
                  : "form-control"
              }
              name="name"
              onChange={this.formValChange}
              placeholder="Name"
            />
            {/* <small className="text-danger">Name is required</small> */}
            {isError.name.length > 0 && (
              <span className="invalid--feedback">{isError.name}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              className={
                isError.email.length > 0
                  ? "is-invalid form-control"
                  : "form-control"
              }
              name="email"
              onChange={this.formValChange}
              placeholder="Email"
            />
            {isError.email.length > 0 && (
              <span className="invalid--feedback">{isError.email}</span>
            )}
            {/* <small className="text-danger">Email is required</small> */}
          </div>

          <div className="form-group">
            <input
              type="text"
              className={
                isError.password.length > 0
                  ? "is-invalid form-control"
                  : "form-control"
              }
              name="password"
              onChange={this.formValChange}
              placeholder="Password"
            />
            {isError.password.length > 0 && (
              <span className="invalid--feedback">{isError.password}</span>
            )}
            {/* <small className="text-danger">Password is required</small> */}
          </div>

          <button type="submit" id="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
