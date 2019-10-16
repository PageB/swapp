import React from 'react';
import styles from './CardEpisodeSummary.module.css';

const cardEpisodeSummary = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardDetails}>
        <p className={styles.CardSummary}>{props.card.summary}</p>
        <p>
          <span className={styles.CardLabel}>Director: </span>
          <span className={styles.CardLabelValue}>{props.card.director}</span>
        </p>
        <p>
          <span className={styles.CardLabel}>Release date: </span>
          <span className={styles.CardLabelValue}>{props.card.releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

export default cardEpisodeSummary;
