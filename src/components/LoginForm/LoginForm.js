import React, { Component } from 'react';
import styles from './LoginForm.module.css'
import Button from '../Button/Button'
import Input from '../Input/Input'

class LoginForm extends Component {
  state = { username: '', password: '', errorMessage: 'Invalid login.' };

  handleInputChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { username, password, errorMessage } = this.state;
    const LoginErrorMessage = errorMessage ? 
      <p className={styles.ErrorMessage}>{errorMessage}</p> : <p></p>;

    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        {LoginErrorMessage}
        <Input
          type="type"
          placeholder="Username"
          name="username"
          value={username}
          onChange={this.handleInputChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        />
        <Button type="submit" btnTheme="isLight">Login</Button>
      </form>
    );
  }
};

export default LoginForm;