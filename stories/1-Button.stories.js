import React from 'react';
import Button from '../src/components/common/Button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW Button',
};

export const btnText = () => <Button>Login</Button>;

export const btnAction = () => <Button onClick={action('Login.')}>Login</Button>; 

// TODO Question: How to trigger and handle action in a Storybook
export const btnTypeReset = () => {
  return (
    <form>
      <input type="text" placeholder='Enter your firstname' name="firstname" value="Mickey" /><br/><br/>
      <input type="text" placeholder='Enter your lastname' name="lastname" value="Mouse" /><br/><br/>
      <Button type='reset'>Reset</Button>
    </form> 
  )
};

export const btnTypeSubmit = () => <Button type='submit'>Submit</Button>;

export const darkTheme = () => <Button theme='DarkTheme'>Login</Button>;

export const lightTheme = () => <Button theme='LightTheme'>Login</Button>;

