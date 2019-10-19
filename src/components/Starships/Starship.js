import React, { Component } from 'react';
import CardCraft from '../common/CardCraft/CardCraft';
import CardChart from '../common/CardChart/CardChart';
import { ThemeConsumer } from '../../contexts/ThemeContext';

import styles from './Starship.module.scss';

class Character extends Component {
  state = {
    starships: this.props.location.state,
  };

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <div className={[styles.Container, styles[props]].join(' ')}>
              <p className={styles.Header}>{this.state.starships.name}</p>
              <p className={styles.SubHeader}>{this.state.starships.shipClass}</p>
              <div className={styles.Body}>
                <CardCraft card={this.state.starships} theme={props} />
                <div className={styles.ListContainer}>
                  <p className={styles.ListTitle}>Compared to Starship Class Max</p>
                  <CardChart card={this.state.starships} theme={props} />
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
