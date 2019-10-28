import React, { Fragment } from 'react';

import Screens from './screens';
import Login from './screens/Login/Login';

const Home = () => {
  return <Fragment>{false ? <Screens /> : <Login />}</Fragment>;
};

export default Home;
