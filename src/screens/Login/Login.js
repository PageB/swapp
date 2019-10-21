import React, { Component, Fragment } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { ThemeConsumer } from '../../contexts/ThemeContext';

class Login extends Component {
  state = {};

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <Fragment>
              <LoginForm theme={props} />
            </Fragment>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Login;