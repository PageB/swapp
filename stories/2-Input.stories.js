import React from 'react';
import Input from '../src/components/Input/Input';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW Input',
};

export const inputWithPlaceholderAttr = () => <Input placeholder="email@mail.com"/>;

export const inputWithValueAttr = () => <Input value="text"/>;

export const inputWithNameAttr = () => <Input name="user"/>;

export const inputTypePassword = () => <Input type="password"/>;

export const inputTypeText = () => <Input type="text"/>;

// TODO Question: How to trigger and handle action in a Storybook
export const inputAction = () => <Input onChange={action((event) => console.log('Input value: ', event.target.value))} type="text" placeholder="Enter your name"/>;
