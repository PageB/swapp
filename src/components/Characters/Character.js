import React, { Component } from 'react';
import CardList from '../common/CardList/CardList';
import CardLink from '../common/CardLink/CardLink';
import CardCharacter from '../common/CardCharacter/CardCharacter';
import { ThemeConsumer } from '../../contexts/ThemeContext';

import styles from './Character.module.scss';

class Character extends Component {
  state = {
    character: this.props.location.state,
  };

  navigationHandler = card => {
    this.props.history.push(`/starship/${card.id}`, card);
  };

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <div className={[styles.CharacterCard, styles[props]].join(' ')}>
              <p className={styles.CharacterCard__Header}>{this.state.character.name}</p>
              <div className={styles.CharacterCard__Body}>
                <CardCharacter card={this.state.character} theme={props} />
                <div className={styles.CharacterCard__ShipList}>
                  <p className={styles.CharacterCard__ShipListTitle}>Piloted Starships</p>
                  <CardList
                    direction={'column'}
                    theme={props}
                    cards={this.state.character.starships}
                    component={CardLink}
                    cardNavigation={this.navigationHandler}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Character;
