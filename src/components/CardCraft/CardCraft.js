import React from 'react';
import styles from './CardCraft.module.css';
import CardRowData from '../CardRowData/CardRowData'

const cardCraft = (props) => {
   return (
    <div className={styles.Card} onClick={() => props.navTo(props.card.id)}>
      <p className={styles.CardName}>{props.card.name}</p>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.name}/>
      <div className={styles.CardDetails}>
        <CardRowData label='Class: '>{props.card.class}</CardRowData>
        <CardRowData label='Cost: '>{props.card.cost}</CardRowData>
        <CardRowData label='Crew: '>{props.card.crew}</CardRowData>
        <CardRowData label='Max Atmospheric speed: '>{props.card.height}</CardRowData>
        <CardRowData label='Hyperdrive Rating: '>{props.card.rating}</CardRowData>
      </div>
    </div>
   );
};

export default cardCraft;