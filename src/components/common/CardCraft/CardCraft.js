import React from 'react';
import CardRowData from '../CardRowData/CardRowData';

import styles from './CardCraft.module.scss';

const cardCraft = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <p className={styles.CardName}>{props.starship.name}</p>
      <img className={styles.CardImage} src={props.starship.image} alt={props.starship.name} />
      <div className={styles.CardDetails}>
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

export default cardCraft;
