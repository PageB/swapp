import React from 'react';
import styles from './CardButton.module.css';

const cardButton = (props) => {
   return (
    <div className={styles.Card} onClick={() => props.navTo(props.card.id)}>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.name}/>
      <div className={styles.CardDetails}>
        <p className={styles.CardName}>{props.card.name}</p>
      </div>
    </div>
   );
};

export default cardButton;