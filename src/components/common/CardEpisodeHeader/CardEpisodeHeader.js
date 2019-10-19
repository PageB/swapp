import React from 'react';

import styles from './CardEpisodeHeader.module.scss';

const cardEpisodeHeader = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <img className={styles.CardImage} src={props.card.image} alt={props.card.title} />
      <div className={styles.CardDetails}>
        <p className={styles.CardEpiside}>{props.card.episode}</p>
        <p className={styles.CardTitle}>{props.card.title}</p>
      </div>
    </div>
  );
};

export default cardEpisodeHeader;
