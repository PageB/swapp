import React, { Component, Fragment } from 'react';
import CardList from '../common/CardList/CardList';
import CardEpisode from '../common/CardEpisode/CardEpisode';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { fetchStarWarsEpisodes } from '../../data';

class Episodes extends Component {
  state = {
    episodes: [],
  };

  async componentDidMount() {
    try {
      const starWarsCharacters = await fetchStarWarsEpisodes();
      this.setState({ episodes: starWarsCharacters });
    } catch (e) {
      this.setState({ episodes: [] });
    }
  }

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <Fragment>
              <CardList component={CardEpisode} cards={this.state.episodes} theme={props} />
            </Fragment>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Episodes;
