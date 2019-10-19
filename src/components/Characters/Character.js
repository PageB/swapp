import React, { Component } from 'react';
import CardList from '../common/CardList/CardList';
import CardCraftLink from '../common/CardCraftLink/CardCraftLink';
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
            <div className={[styles.Container, styles[props]].join(' ')}>
              <p className={styles.Header}>{this.state.character.name}</p>
              <div className={styles.Body}>
                <CardCharacter card={this.state.character} theme={props} />
                <div className={styles.ListContainer}>
                  <p className={styles.ListTitle}>Piloted Starships</p>
                  <CardList
                    component={CardCraftLink}
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
