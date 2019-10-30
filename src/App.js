import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import Nav from './components/NavigationToolbar/NavigationToolbar';
import Home from './Home';

const client = new ApolloClient({
  uri: 'https://swapp.st6.io/graphql',
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

class App extends Component {
  state = {
    theme: 'DarkTheme',
  };

  /**
   * componentDidMount lifecycle hook.
   *
   * @method componentDidMount
   */
  componentDidMount() {
    document.body.classList.add('DarkTheme');
  }

  /**
   * componentDidMount lifecycle hook.
   *
   * @method componentDidMount
   */
  componentWillUnmount() {
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('LightTheme');
  }

  /**
   * Change body class names based on theme selection
   *
   * @method themeChangeHandler
   */
  themeChangeHandler = () => {
    if (this.state.theme === 'DarkTheme') {
      document.body.classList.add('LightTheme');
      document.body.classList.remove('DarkTheme');
      this.setState({ theme: 'LightTheme' });
    } else {
      document.body.classList.add('DarkTheme');
      document.body.classList.remove('LightTheme');
      this.setState({ theme: 'DarkTheme' });
    }
  };

  /**
   * Render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider value={this.state.theme}>
          <Router>
            <Nav themeChanged={this.themeChangeHandler} />
            <Home />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
