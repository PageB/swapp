import React, { Component, Fragment } from 'react';
import CardEpisodeHeader from '../common/CardEpisodeHeader/CardEpisodeHeader';
import CardEpisodeSummary from '../common/CardEpisodeSummary/CardEpisodeSummary';
import CardList from '../common/CardList/CardList';
import CardCharacterLink from '../common/CardCharacterLink/CardCharacterLink';
import Button from '../common/Button/Button';
import styles from './Episode.module.css';

class Episode extends Component {
  state = {
    episode: this.props.location.state
  };

  render() {
    console.log(this.state.episode)
    return (
      <div className={styles.Container}>
        <CardEpisodeHeader card={this.state.episode}/>
        <CardEpisodeSummary card={this.state.episode}/>
        <CardList component={CardCharacterLink} cards={this.state.episode.characters}/>
        <Button>Load More</Button>
      </div>
    );
  };
};

export default Episode;