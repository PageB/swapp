import React, { Component, Fragment } from 'react';
import CardList from '../../components/CardList/CardList';
import CardEpisode from '../../components/CardEpisode/CardEpisode';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { fetchStarWarsEpisodes } from './../../mock/data';

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

  navigationHandler = card => {
    this.props.history.push(`/episodes/${card.id}`, card);
  };

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <Fragment>
              <CardList
                component={CardEpisode}
                cards={this.state.episodes}
                theme={props}
                cardNavigation={this.navigationHandler}
              />
            </Fragment>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Episodes;
