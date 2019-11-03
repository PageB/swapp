import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from '../../components';
import styles from './LoginForm.module.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', errorMessage: this.props.error };
  }

  /**
   * Update corresponding input on change.
   *
   * @method handleInputChange
   * @param {Object} event
   */
  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  /**
   * Call login action on form submit.
   *
   * @method handleInputChange
   * @param {Object} event
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ variables: { email: this.state.email, password: this.state.password } });
  };

  /**
   * Render lifecycle hook.
   *
   * @method render
   */
  render() {
    const { email, password, errorMessage } = this.state;

    const LoginErrorMessage = errorMessage ? (
      <p className={styles.ErrorMessage}>{errorMessage}</p>
    ) : (
      <></>
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
