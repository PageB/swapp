import React from 'react';
import styles from './CardCraftLink.module.css';
import { withRouter } from 'react-router-dom'

const cardCraftLink = withRouter((props) => {
  return (
    <div className={styles.Card} onClick={() => { props.history.push(`/starship/${props.card.id}`, props.card)}}>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.name} />
      <div className={styles.CardDetails}>
        <p className={styles.CardName}>{props.card.name}</p>
      </div>
    </div>
  );
});

export default cardCraftLink;
