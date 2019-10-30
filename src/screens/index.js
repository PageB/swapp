import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Episode from './Episodes/Episode';
import Episodes from './Episodes/Episodes';
import Character from './Characters/Character';
import Characters from './Characters/Characters';
import Starship from './Starships/Starship';

const Screens = () => {
  return (
    <Switch>
      <Route exact path="/episodes" component={Episodes} />
      <Route path="/episodes/:episodeId" component={Episode} />
      <Route exact path="/characters" component={Characters} />
      <Route path="/characters/:characterId" component={Character} />
      <Route path="/starships/:starshipId" component={Starship} />
      <Route path="/" exact component={() => <Redirect to="/episodes" />} />
    </Switch>
  );
};

export default Screens;
