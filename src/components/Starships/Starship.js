import React, { Component } from 'react';
import CardStarship from '../common/CardStarship/CardStarship';
import CardChart from '../common/CardChart/CardChart';
import { ThemeConsumer } from '../../contexts/ThemeContext';

import styles from './Starship.module.scss';

class Character extends Component {
  state = {
    starship: this.props.location.state,
  };

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <div className={[styles.StarshipCard, styles[props]].join(' ')}>
              <p className={styles.StarshipCard__Header}>{this.state.starship.name}</p>
              <p className={styles.StarshipCard__SubHeader}>{this.state.starship.model}</p>
              <div className={styles.StarshipCard__Body}>
                <CardStarship starship={this.state.starship} theme={props} />
                <div className={styles.ChartCard}>
                  <p className={styles.ChartCard__Title}>Compared to Starship Class Max</p>
                  <CardChart starship={this.state.starship} theme={props} />
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
