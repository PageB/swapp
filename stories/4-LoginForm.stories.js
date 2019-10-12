import React from 'react';
import LoginForm from '../src/components/LoginForm/LoginForm';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW LoginForm',
};

export const submitAction = () => <LoginForm onSubmit={action('Handle input change action.')}/>;
