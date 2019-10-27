import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Nav from './components/NavigationToolbar/NavigationToolbar';
import Login from './screens/Login/Login';
import Episode from './screens/Episodes/Episode';
import Episodes from './screens/Episodes/Episodes';
import Character from './screens/Characters/Character';
import Characters from './screens/Characters/Characters';
import Starship from './screens/Starships/Starship';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://swapp.st6.io/graphql',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTZmYTFlYTQxYTA4MGY4YjIxMjMwMiIsImVtYWlsIjoiZGVtb0BzdDYuaW8iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE1NzIxNzc0OTAsImV4cCI6MTU3MjE3OTI5MH0.GX4no7G2MoVLP1hrCeqtts0MDghPhzrN9nfP4nn2jF0',
  },
});

class App extends Component {
  state = {
    theme: 'DarkTheme',
  };

  // TODO: Refactor with React hooks
  componentDidMount() {
    document.body.classList.add('DarkTheme');
  }

  // TODO: Refactor with React hooks
  componentWillUnmount() {
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('LightTheme');
  }

  /**
   * Loop all cards and render each as JSX item.
   *
   * @method handleThemeChange
   * @param {JSX Object} CardItem
   * @param {Object} cards
   */
  themeChangeHandler = () => {
    const currentTheme = this.state.theme;

    if (currentTheme === 'DarkTheme') {
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
            <Fragment>
              <Nav themeChanged={this.themeChangeHandler} />
              <Switch>
                {/* <Route path="/" component={Login} /> */}
                <Route exact path="/episodes" component={Episodes} />
                <Route path="/episodes/:episodeId" component={Episode} />
                <Route exact path="/characters" component={Characters} />
                <Route path="/characters/:characterId" component={Character} />
                <Route path="/starships/:starshipId" component={Starship} />
              </Switch>
            </Fragment>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
