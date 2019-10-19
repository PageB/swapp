import React, { Component } from 'react';
import CardList from '../common/CardList/CardList';
import CardStarshipLink from '../common/CardStarshipLink/CardStarshipLink';
import CardCharacter from '../common/CardCharacter/CardCharacter';
import { ThemeConsumer } from '../../contexts/ThemeContext';

import styles from './Character.module.scss';

class Character extends Component {
  state = {
    character: this.props.location.state,
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
                    component={CardStarshipLink}
                    direction={'column'}
                    cards={this.state.character.starships}
                    theme={props}
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
