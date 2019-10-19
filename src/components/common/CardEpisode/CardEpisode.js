import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './CardEpisode.module.scss';

const cardEpisode = withRouter(props => {
  return (
    <div
      className={[styles.Card, styles[props.theme]].join(' ')}
      onClick={() => {
        props.history.push(`/episode/${props.card.id}`, props.card);
      }}
    >
      <img className={styles.CardImage} src={props.card.image} alt={props.card.title} />
      <div className={styles.CardDetails}>
        <p className={styles.CardTitle}>{props.card.title}</p>
        <p className={styles.CardSummary}>{props.card.summary}</p>
      </div>
    </div>
  );
});

export default cardEpisode;
