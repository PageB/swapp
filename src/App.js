import React, { Fragment } from 'react';
import Nav from './components/common/NavigationToolbar/NavigationToolbar';
import Episode from './components/Episodes/Episode';
import Episodes from './components/Episodes/Episodes';
import Character from './components/Characters/Character';
import Characters from './components/Characters/Characters';
import Starship from './components/Starships/Starship';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route path="/episodes" component={Episodes} />
          <Route path="/episode/:episodeId" component={Episode} />
          <Route path="/characters" component={Characters} />
          <Route path="/character/:characterId" component={Character} />
          <Route path="/starship/:starshipId" component={Starship} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
