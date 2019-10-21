import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './CardEpisode.module.scss';

const cardEpisode = withRouter(props => {
  return (
    <div
      className={[styles.CardEpisode, styles[props.theme]].join(' ')}
      onClick={() => {
        props.history.push(`/episode/${props.card.id}`, props.card);
      }}
    >
      <img className={styles.CardEpisode__Image} src={props.card.image} alt={props.card.title} />
      <div className={styles.CardEpisode__Details}>
        <p className={styles.CardEpisode__Title}>{props.card.title}</p>
        <p className={styles.CardEpisode__Summary}>{props.card.openingCrawl}</p>
      </div>
    </div>
  );
});

cardEpisode.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardEpisode.defaultProps = {
  theme: 'DarkTheme',
};

export default cardEpisode;
