import React from 'react';
import CardCharacter from '../src/components/common/CardCharacter/CardCharacter';
import { starWarsCharacters } from './../src/data';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardCharacter',
};

export const cardCharacter = () => <CardCharacter card={starWarsCharacters[0]}/>;
