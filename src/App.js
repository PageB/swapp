import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

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
   * Render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Home />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
