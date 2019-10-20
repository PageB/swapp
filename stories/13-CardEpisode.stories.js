import React from 'react';
import CardEpisode from '../src/components/common/CardEpisode/CardEpisode';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { starWarsEpisodes } from './../../mock/data';

export default {
  title: 'SW CardEpisode',
};

export const cardEpisode = () => {
  return (
    <Router>
      <Switch>
        <CardEpisode card={starWarsEpisodes[0]}/>;
      </Switch>
    </Router>
  )
}
