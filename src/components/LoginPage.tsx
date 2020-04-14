import React, { Component, Fragment } from "react";
import LoginButton from "./LoginButton"

const defaultState = {
  userName: " ",
  password: " ",
  errorMessage: " ",
};

export class LoginPage extends React.Component {
  state = defaultState;

  render() {
    return (
      <Fragment>
        <div>
          <input name="" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <LoginButton />
      </Fragment>
    );
  }
}

export default LoginPage;
