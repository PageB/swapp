import React from 'react';
import CardRowData from '../CardRowData/CardRowData';

import styles from './CardCharacter.module.scss';

const cardCharacter = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <p className={styles.CardName}>{props.card.name}</p>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.name} />
      <div className={styles.CardDetails}>
        <CardRowData label="Height: ">{props.card.height}</CardRowData>
        <CardRowData label="Weight: ">{props.card.weight}</CardRowData>
        <CardRowData label="Species: ">{props.card.species}</CardRowData>
        <CardRowData label="Home World: ">{props.card.world}</CardRowData>
      </div>
    </div>
  );
};

export default cardCharacter;
