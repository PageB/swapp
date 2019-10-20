import React from 'react';
import CardList from '../src/components/common/CardList/CardList';
import CardLink from '../src/components/common/CardLink/CardLink';
import { starWarsCharacters } from './../../mock/data';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardList',
};

export const cardListDefaultDirection = () => {
  return (
    <Router>
      <Switch>
        <CardList component={CardLink} cards={starWarsCharacters}/>;
      </Switch>
    </Router>
  )
}

export const cardListColumnDirection = () => {
  return (
    <Router>
      <Switch>
        <CardList direction='column' component={CardLink} cards={starWarsCharacters}/>;
      </Switch>
    </Router>
  )
}
