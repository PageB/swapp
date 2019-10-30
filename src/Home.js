import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

import { NavigationToolbar } from './components';
import Screens from './screens';
import Login from './screens/Login/Login';

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [theme, setTheme] = useState('DarkTheme');

  /**
   * Set token value after user sing in successfully.
   *
   * @method handleLogin
   * @param {String} token
   */
  const handleLogin = token => {
    setToken(token);
  };

  /**
   * Reset token value after user sing out successfully.
   *
   * @method handleLogout
   */
  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  /**
   * Change body class names based on theme selection
   *
   * @method themeChangeHandler
   */
  const themeChangeHandler = () => {
    if (theme === 'DarkTheme') {
      document.body.classList.add('LightTheme');
      document.body.classList.remove('DarkTheme');
      setTheme('LightTheme');
    } else {
      document.body.classList.add('DarkTheme');
      document.body.classList.remove('LightTheme');
      setTheme('DarkTheme');
    }
  };

  return (
    <ThemeProvider value={theme}>
      <NavigationToolbar
        themeChanged={themeChangeHandler}
        userAuthenticated={!!token}
        onLogout={handleLogout}
      />
      {token ? <Screens /> : <Login onLogin={handleLogin} />}
    </ThemeProvider>
  );
};

export default Home;
