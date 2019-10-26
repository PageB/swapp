import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardEpisode.module.scss';

const cardEpisode = props => {
  return (
    <div
      className={[styles.CardEpisode, styles[props.theme]].join(' ')}
      onClick={() => props.navigate(props.card.node)}
    >
      <img
        className={styles.CardEpisode__Image}
        src={props.card.node.image}
        alt={props.card.node.title}
      />
      <div className={styles.CardEpisode__Details}>
        <p className={styles.CardEpisode__Title}>{props.card.node.title}</p>
        <p className={styles.CardEpisode__Summary}>{props.card.node.openingCrawl}</p>
      </div>
    </div>
  );
};

cardEpisode.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardEpisode.defaultProps = {
  theme: 'DarkTheme',
};

export default cardEpisode;
