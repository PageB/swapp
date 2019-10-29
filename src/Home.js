import React, { useState } from 'react';

import Screens from './screens';
import Login from './screens/Login/Login';

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = token => {
    setToken(token);
  };

  return <>{token ? <Screens /> : <Login onLogin={handleLogin} />}</>;
};

export default Home;
