import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { AUTH } from '../../../constants';

class LoginForm extends Component {
  state = { email: '', password: '', errorMessage: 'Invalid login.' };

  handleInputChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const url = 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql/signIn';
    const options = {
      method: 'post',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI123iIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTZmYTFl YTQxYTA4MGY4YjIxMjMwMiIsImVtYWlsIjoiZGVtb0BzdDYuaW8iL CJyb2xlIjoiQURNSU4iL1KHHASDHXQiOjE1NzAxNzYwMjksImV4c CI6MTU3MDE3NzgyOX0.1vYZfspRxVA9wV_FbHL5N0YoVM8ZVQ z9y09LfAgjwSc',
      },
      body: `email=${this.state.email}&password=${this.state.password}`,
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
          type="type"
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

export default LoginForm;
