import React from 'react';
import CardList from '../src/components/common/CardList/CardList';
import CardCharacterLink from '../src/components/common/CardCharacterLink/CardCharacterLink';
import { starWarsCharacters } from './../src/data';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardList',
};

export const cardListDefaultDirection = () => {
  return (
    <Router>
      <Switch>
        <CardList component={CardCharacterLink} cards={starWarsCharacters}/>;
      </Switch>
    </Router>
  )
}

export const cardListColumnDirection = () => {
  return (
    <Router>
      <Switch>
        <CardList direction='column' component={CardCharacterLink} cards={starWarsCharacters}/>;
      </Switch>
    </Router>
  )
}
