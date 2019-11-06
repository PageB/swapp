import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import client from './client';

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
