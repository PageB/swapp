import React from 'react';
import Input from '../src/components/Input/Input';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW Input',
};

export const placeholder = () => <Input placeholder="email@mail.com"/>;

export const typePassword = () => <Input type="password"/>;

export const typeText = () => <Input type="text"/>;

export const value = () => <Input value="text"/>;

export const changeAction = () => <Input onChange={action('Handle input change action.')} type="text" placeholder="Enter your name"/>;
