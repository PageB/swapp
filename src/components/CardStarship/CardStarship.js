import React from 'react';
import PropTypes from 'prop-types';

import CardRowData from '../CardRowData/CardRowData';
import styles from './CardStarship.module.scss';

const cardStarship = props => {
  return (
    <div className={[styles.StarshipCard, styles[props.theme]].join(' ')}>
      <p className={styles.StarshipCard__Name}>{props.starship.name}</p>
      <img
        className={styles.StarshipCard__Image}
        src={props.starship.image}
        alt={props.starship.name}
      />
      <div className={styles.StarshipCard__Details}>
        <CardRowData label="Class: " theme={props.theme}>
          {props.starship.starshipClass}
        </CardRowData>
        <CardRowData label="Cost: " theme={props.theme}>
          {props.starship.cost}
        </CardRowData>
        <CardRowData label="Crew: " theme={props.theme}>
          {props.starship.crew}
        </CardRowData>
        <CardRowData label="Max Atmospheric speed: " theme={props.theme}>
          {props.starship.maxAtmosphericSpeed}
        </CardRowData>
        <CardRowData label="Hyperdrive Rating: " theme={props.theme}>
          {props.starship.hyperdriveRating}
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
