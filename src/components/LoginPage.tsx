import React from "react";

const defaultState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: "",
};

export class LoginPage extends React.Component {
  state = defaultState;

  handleChange = (event: any) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  valid = () => {
    let nameError = "";
    let passwordError = "";

    if (!this.state.name.includes("user")) {
      nameError = "Username is incorrect";
    }

    if (!this.state.password.includes("password")) {
      passwordError = "Password is incorrect";
    }

    if (nameError || passwordError) {
      this.setState({ nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const isValid = this.valid();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(defaultState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Username
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 11, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          Password
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 11, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default LoginPage;
