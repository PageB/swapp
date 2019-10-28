import React, { Fragment } from 'react';

import Screens from './screens';
import Login from './screens/Login/Login';

const Home = () => {
  const token = localStorage.getItem('token');

  return <Fragment>{token ? <Screens /> : <Login />}</Fragment>;
};

export default Home;
