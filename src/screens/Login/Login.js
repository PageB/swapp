import React, { Component, Fragment, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <LoginForm theme={theme} />
    </Fragment>
  );
};

export default Login;
