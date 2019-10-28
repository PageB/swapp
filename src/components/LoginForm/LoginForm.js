import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from './LoginForm.module.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', errorMessage: this.props.error };
  }

  handleInputChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ variables: { email: this.state.email, password: this.state.password } });
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
          autocomplete="on"
          onChange={this.handleInputChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          autocomplete="on"
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
