import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
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

const Login = () => {
  const history = useHistory();
  const theme = useContext(ThemeContext);
  const [login, { loading, error = '' }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: token }) => {
      localStorage.setItem('token', token.token);
      history.push(`/episodes`);
    },
    onError: () => {},
  });

  if (loading) return <Loading />;

  return <LoginForm theme={theme} login={login} error={error.message} />;
};

export default Login;
