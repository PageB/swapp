import React, { Component } from 'react';
import CardList from '../common/CardList/CardList';
import CardCraftLink from '../common/CardCraftLink/CardCraftLink';
import CardCharacter from '../common/CardCharacter/CardCharacter';
import styles from './Character.module.css';

class Character extends Component {
  state = {
    character: this.props.location.state,
  };

  render() {
    return (
      <div className={styles.Container}>
        <p className={styles.Header}>{this.state.character.name}</p>
        <div className={styles.Body}>
          <CardCharacter card={this.state.character} />
          <div className={styles.ListContainer}>
            <p className={styles.ListTitle}>Piloted Starships</p>
            <CardList component={CardCraftLink} cards={this.state.character.starships} />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
