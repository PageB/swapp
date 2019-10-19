import React from 'react';
import CardStarship from '../src/components/CardStarship/CardStarship';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardStarship',
};

const character = {
  id: 100,
  name: "Jedi Starfighter",
  image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
  class: 'starfighter',
  cost: '180000 credits',
  crew: 1,
  speed: 1159,
  rating: 1
}

export const CardStarshipView = () => <CardStarship card={character} navTo={action('Handle input change action.')}/>;
