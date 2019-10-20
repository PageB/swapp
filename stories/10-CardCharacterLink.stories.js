import React from 'react';
import CardCharacterLink from '../src/components/common/CardCharacterLink/CardCharacterLink';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardCharacterLink',
};

const character = {
  id: 100,
  name: "Obi-Wan Kenobi",
  image: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"
}

export const characterLink = () => {
  return (
    <Router>
      <Switch>
        <CardCharacterLink card={character}/>;
      </Switch>
    </Router>
  )
}