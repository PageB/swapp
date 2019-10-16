import React from 'react';
import Button from '../src/components/Button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW Button',
};

export const text = () => <Button>Login</Button>;

export const darkTheme = () => <Button onClick={action('Login.')} theme='DarkTheme'>Login</Button>;

export const lightTheme = () => <Button onClick={action('Login.')} theme='LightTheme'>Login</Button>;

export const clickAction = () => <Button onClick={action('Login.')}>Login</Button>;