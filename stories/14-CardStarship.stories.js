import React from 'react';
import CardStarship from '../src/components/common/CardStarship/CardStarship';
import { starWarsCharacters } from './../../mock/data';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardStarship',
};

export const cardStarship = () => <CardStarship starship={starWarsCharacters[0].starships[0]}/>;
