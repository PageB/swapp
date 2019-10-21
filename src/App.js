import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeConsumer } from './contexts/ThemeContext';
import Nav from './components/NavigationToolbar/NavigationToolbar';
// import Login from './screens/Login/Login';
import Episode from './screens/Episodes/Episode';
import Episodes from './screens/Episodes/Episodes';
import Character from './screens/Characters/Character';
import Characters from './screens/Characters/Characters';
import Starship from './screens/Starships/Starship';

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
      <Router>
        <ThemeProvider value={this.state.theme}>
          <Fragment>
            <ThemeConsumer>
              {props => {
                return <Nav themeChanged={this.themeChangeHandler} theme={props} />;
              }}
            </ThemeConsumer>
            <Switch>
              {/* <Route path="/" component={Login} /> */}
              <Route exact path="/episodes" component={Episodes} />
              <Route path="/episodes/:episodeId" component={Episode} />
              <Route exact path="/characters" component={Characters} />
              <Route path="/characters/:characterId" component={Character} />
              <Route path="/starships/:starshipId" component={Starship} />
            </Switch>
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
