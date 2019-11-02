import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { LoginForm, Loading } from '../../components';
import ThemeContext from '../../contexts/ThemeContext';

import gql from 'graphql-tag.macro';
const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const Login = ({ onLogin }) => {
  const theme = useContext(ThemeContext);
  const [login, { loading, error = '' }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: token }) => {
      debugger
      localStorage.setItem('token', token.token);
      onLogin(token.token);
    },
    onError: (err) => {
      debugger
    },
  });

  if (loading) return <Loading />;

  return <LoginForm theme={theme} login={login} error={error.message} />;
};

export default Login;
