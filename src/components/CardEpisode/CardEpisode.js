import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardEpisode.module.scss';

const cardEpisode = ({ theme, card: episode, navigate }) => {
  return (
    <div
      className={[styles.CardEpisode, styles[theme]].join(' ')}
      onClick={() => navigate(episode.node)}
    >
      <img
        className={styles.CardEpisode__Image}
        src={episode.node.image}
        alt={episode.node.title}
      />
      <div className={styles.CardEpisode__Details}>
        <p className={styles.CardEpisode__Title}>{episode.node.title}</p>
        <p className={styles.CardEpisode__Summary}>{episode.node.openingCrawl}</p>
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
