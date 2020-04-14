import React, { Component, Fragment } from "react";
import LoginButton from "./LoginButton";

const defaultState = {
  userName: " ",
  password: " ",
  errorMessage: " ",
};

export class LoginPage extends React.Component {
  state = defaultState;

  valid = () => {
    let errorMessage: string;

    if (!this.state.userName.includes("user")) {
      errorMessage = "Username is incorrect";
    }
  };

  handleLogin = (event: any) => {
    event.preventDefault();
    const signedIn = this.valid();
    if (signedIn) {
      console.log(this.state);

      this.setState(defaultState);
    }
  };

  render() {
    return (
      <Fragment>
        <div>
          UserName
          <input />
          <div>{this.state.errorMessage}</div>
        </div>
        <div>
          Password
          <input type="password" />
          <div>{this.state.errorMessage}</div>
        </div>
        <LoginButton />
      </Fragment>
    );
  }
}

export default LoginPage;
