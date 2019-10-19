import React, { Component } from 'react';
import CardEpisodeHeader from '../common/CardEpisodeHeader/CardEpisodeHeader';
import CardEpisodeSummary from '../common/CardEpisodeSummary/CardEpisodeSummary';
import CardList from '../common/CardList/CardList';
import CardCharacterLink from '../common/CardCharacterLink/CardCharacterLink';
import Button from '../common/Button/Button';
import { ThemeConsumer } from '../../contexts/ThemeContext';

import styles from './Episode.module.scss';

class Episode extends Component {
  state = {
    episode: this.props.location.state,
  };

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <div className={styles.Container}>
              <CardEpisodeHeader card={this.state.episode} theme={props} />
              <CardEpisodeSummary card={this.state.episode} theme={props} />
              <CardList
                component={CardCharacterLink}
                cards={this.state.episode.characters}
                theme={props}
              />
              <Button theme={props}>Load More</Button>
            </div>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Episode;
