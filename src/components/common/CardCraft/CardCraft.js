import React from 'react';
import styles from './CardCraft.module.css';
import CardRowData from '../CardRowData/CardRowData';

const cardCraft = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <p className={styles.CardName}>{props.card.name}</p>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.name} />
      <div className={styles.CardDetails}>
        <CardRowData label="Class: " theme={props.theme}>
          {props.card.class}
        </CardRowData>
        <CardRowData label="Cost: " theme={props.theme}>
          {props.card.cost}
        </CardRowData>
        <CardRowData label="Crew: " theme={props.theme}>
          {props.card.crew}
        </CardRowData>
        <CardRowData label="Max Atmospheric speed: " theme={props.theme}>
          {props.card.speed}
        </CardRowData>
        <CardRowData label="Hyperdrive Rating: " theme={props.theme}>
          {props.card.rating}
        </CardRowData>
      </div>
    </div>
  );
};

export default cardCraft;
