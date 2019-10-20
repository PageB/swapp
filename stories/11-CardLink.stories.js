import React from 'react';
import CardLink from '../src/components/common/CardLink/CardLink';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardLink',
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
        <CardLink card={starship}/>;
      </Switch>
    </Router>
  )
}

const character = {
  id: 100,
  name: "Obi-Wan Kenobi",
  image: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"
}

export const characterLink = () => {
  return (
    <Router>
      <Switch>
        <CardLink card={character}/>;
      </Switch>
    </Router>
  )
}