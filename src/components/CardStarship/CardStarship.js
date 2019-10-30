import React from 'react';
import PropTypes from 'prop-types';

import CardRowData from '../CardRowData/CardRowData';
import styles from './CardStarship.module.scss';

const cardStarship = ({ theme, starship }) => {
  return (
    <div className={[styles.StarshipCard, styles[theme]].join(' ')}>
      <p className={styles.StarshipCard__Name}>{starship.name}</p>
      <img className={styles.StarshipCard__Image} src={starship.image} alt={starship.name} />
      <div className={styles.StarshipCard__Details}>
        <CardRowData label="Class: " theme={theme}>
          {starship.starshipClass}
        </CardRowData>
        <CardRowData label="Cost: " theme={theme}>
          {starship.cost}
        </CardRowData>
        <CardRowData label="Crew: " theme={theme}>
          {starship.crew}
        </CardRowData>
        <CardRowData label="Max Atmospheric speed: " theme={theme}>
          {starship.maxAtmosphericSpeed}
        </CardRowData>
        <CardRowData label="Hyperdrive Rating: " theme={theme}>
          {starship.hyperdriveRating}
        </CardRowData>
      </div>
    </div>
  );
};

cardStarship.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardStarship.defaultProps = {
  theme: 'DarkTheme',
};

export default cardStarship;
