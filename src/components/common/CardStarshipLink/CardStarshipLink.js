import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './CardStarshipLink.module.scss';

const cardStarshipLink = withRouter(props => {
  return (
    <div
      className={[styles.Card, styles[props.theme]].join(' ')}
      onClick={() => {
        props.history.push(`/starship/${props.card.id}`, props.card);
      }}
    >
      <img className={styles.Card__Image} src={props.card.image} alt={props.card.name} />
      <div className={styles.Card__Title}>
        <p className={styles.Card__Text}>{props.card.name}</p>
      </div>
    </div>
  );
});

export default cardStarshipLink;
