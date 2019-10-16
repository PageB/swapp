import React, { Component } from 'react';
import CardCraft from '../common/CardCraft/CardCraft';
import CardChart from '../common/CardChart/CardChart';
import styles from './Starship.module.css';

class Character extends Component {
  state = {
    starships: this.props.location.state,
  };

  render() {
    return (
      <div className={styles.Container}>
        <p className={styles.Header}>{this.state.starships.name}</p>
        <div className={styles.Body}>
          <CardCraft card={this.state.starships} />
          <div className={styles.ListContainer}>
            <p className={styles.ListTitle}>Compared to Starship Class Max</p>
            <CardChart card={this.state.starships} />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
