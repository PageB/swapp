import React from 'react';
import CardStarshipLink from '../src/components/common/CardStarshipLink/CardStarshipLink';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardStarshipLink',
};

const starship = {
  id: 100,
  name: 'Jedi Starfighter',
  image: 'https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg',
}

export const starshipLink = () => {
  return (
    <Router>
      <Switch>
        <CardStarshipLink card={starship}/>;
      </Switch>
    </Router>
  )
}