import React from 'react';
import styles from './CardEpisodeHeader.module.css';

const cardEpisodeHeader = (props) => {
  return (
    <div className={styles.Card}>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.title} />
      <div className={styles.CardDetails}>
        <p className={styles.CardEpiside}>{props.card.episode}</p>
        <p className={styles.CardTitle}>{props.card.title}</p>
      </div>
    </div>
  );
};

export default cardEpisodeHeader;
