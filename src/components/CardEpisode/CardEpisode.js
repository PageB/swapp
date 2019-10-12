import React from 'react';
import styles from './CardEpisode.module.css';

const cardEpisode = props => {
  return (
    <div className={styles.Card} onClick={() => props.navTo(props.card.id)}>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.title} />
      <div className={styles.CardDetails}>
        <p className={styles.CardTitle}>{props.card.title}</p>
        <p className={styles.CardSummary}>{props.card.summary}</p>
      </div>
    </div>
  );
};

export default cardEpisode;
