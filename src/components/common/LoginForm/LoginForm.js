import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { AUTH } from '../../../constants';

import styles from './LoginForm.module.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', errorMessage: this.props.errorMessage };
  }

  handleInputChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const url = 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql';
    const options = {
      method: 'POST',
      headers: {
        Authentication: '',
      },
      body: JSON.stringify({
        mutation: `{ signIn(email: ${this.state.email} password: ${this.state.password}) }`,
      }),
    };

    fetch(url, options)
      .then(response => {
        debugger;
        if (!response.ok) {
          if (response.status === 404) {
            alert('Email not found, please retry');
          }
          if (response.status === 401) {
            alert('Email and password do not match, please retry');
          }
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.cookie = 'token=' + data.token;
          // navigate('/private-area')
        }
      });
  };

  handleeUserData = token => {
    if (token) {
      localStorage.removeItem(AUTH.AUTH_TOKEN);
      // this.props.history.push(`/`);
    } else {
      localStorage.setItem(AUTH.AUTH_TOKEN, token);
    }
  };

  render() {
    const { email, password, errorMessage } = this.state;

    const LoginErrorMessage = errorMessage ? (
      <p className={styles.ErrorMessage}>{errorMessage}</p>
    ) : (
      <p></p>
    );

    return (
      <form
        className={[styles.Form, styles[this.props.theme]].join(' ')}
        onSubmit={this.handleSubmit}
      >
        {LoginErrorMessage}
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        />
        <Button type="submit" theme={this.props.theme}>
          Login
        </Button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

LoginForm.defaultProps = {
  theme: 'DarkTheme',
};

export default LoginForm;
