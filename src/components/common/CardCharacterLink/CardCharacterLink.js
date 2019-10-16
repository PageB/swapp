import React from 'react';
import styles from './CardCharacterLink.module.css';
import { withRouter } from 'react-router-dom';

const cardCharacterLink = withRouter(props => {
  return (
    <div
      className={[styles.Card, styles[props.theme]].join(' ')}
      onClick={() => {
        props.history.push(`/character/${props.card.id}`, props.card);
      }}>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.name} />
      <div className={styles.CardDetails}>
        <p className={styles.CardName}>{props.card.name}</p>
      </div>
    </div>
  );
});

export default cardCharacterLink;
