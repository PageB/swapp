import React, { Component } from 'react';
import CardList from '../common/CardList/CardList';
import CardCraftLink from '../common/CardCraftLink/CardCraftLink';
import CardCharacter from '../common/CardCharacter/CardCharacter';
import styles from './Character.module.css';
import { ThemeConsumer } from '../../contexts/ThemeContext';

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
