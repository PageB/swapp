import React from 'react';
import CardRowData from '../CardRowData/CardRowData';
import PropTypes from 'prop-types';

import styles from './CardCharacter.module.scss';

const cardCharacter = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <p className={styles.Card__Title}>{props.card.name}</p>
      <img className={styles.Card__Image} src={props.card.image} alt={props.card.name} />
      <div className={styles.Card__TextDetails}>
        <CardRowData label="Height: ">{props.card.height}</CardRowData>
        <CardRowData label="Weight: ">{props.card.mass}</CardRowData>
        <CardRowData label="Species: ">{props.card.species}</CardRowData>
        <CardRowData label="Home World: ">{props.card.homeworld}</CardRowData>
      </div>
    </div>
  );
};

cardCharacter.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardCharacter.defaultProps = {
  theme: 'DarkTheme',
};

export default cardCharacter;
