import React, { Component, Fragment } from 'react';
import LoginForm from '../common/LoginForm/LoginForm';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import styles from './Login.module.css';

class Characters extends Component {
  state = {

  };

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

export default Characters;
