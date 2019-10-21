import React from 'react';
import LoginForm from '../src/components/LoginForm/LoginForm';

export default {
  title: 'SW LoginForm',
};

// TODO Question: How to trigger and handle action in a Storybook
export const loginForm = () => <LoginForm theme='DarkTheme'/>;

export const loginFormError = () => <LoginForm theme='DarkTheme' errorMessage="Wrong user/password.Please try again."/>;
