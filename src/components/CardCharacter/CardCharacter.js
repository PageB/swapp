import React from 'react';
import PropTypes from 'prop-types';

import CardRowData from '../CardRowData/CardRowData';
import styles from './CardCharacter.module.scss';

const cardCharacter = ({ theme, card: character }) => {
  return (
    <div className={[styles.Card, styles[theme]].join(' ')}>
      <p className={styles.Card__Title}>{character.name}</p>
      <img className={styles.Card__Image} src={character.image} alt={character.name} />
      <div className={styles.Card__TextDetails}>
        <CardRowData label="Height: ">{character.height}</CardRowData>
        <CardRowData label="Weight: ">{character.mass}</CardRowData>
        <CardRowData label="Species: ">{character.species.name}</CardRowData>
        <CardRowData label="Home World: ">{character.homeworld.name}</CardRowData>
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
