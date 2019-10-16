import React from 'react';
import styles from './CardEpisode.module.css';
import { withRouter } from 'react-router-dom';

const cardEpisode = withRouter(props => {
  return (
    <div
      className={[styles.Card, styles[props.theme]].join(' ')}
      onClick={() => {
        props.history.push(`/episode/${props.card.id}`, props.card);
      }}>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.title} />
      <div className={styles.CardDetails}>
        <p className={styles.CardTitle}>{props.card.title}</p>
        <p className={styles.CardSummary}>{props.card.summary}</p>
      </div>
    </div>
  );
});

export default cardEpisode;
