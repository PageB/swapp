import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import CardLink from '../../components/CardLink/CardLink';
import CardEpisodeHeader from '../../components/CardEpisodeHeader/CardEpisodeHeader';
import CardEpisodeSummary from '../../components/CardEpisodeSummary/CardEpisodeSummary';
import { ThemeConsumer } from '../../contexts/ThemeContext';

import styles from './Episode.module.scss';

class Episode extends Component {
  state = {
    episode: this.props.location.state,
  };

  navigationHandler = card => {
    this.props.history.push(`/character/${card.id}`, card);
  };

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <div className={styles.EpisodeCard}>
              <CardEpisodeHeader card={this.state.episode} theme={props} />
              <CardEpisodeSummary card={this.state.episode} theme={props} />
              <CardList
                theme={props}
                cards={this.state.episode.people}
                component={CardLink}
                cardNavigation={this.navigationHandler}
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
