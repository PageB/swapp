import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardEpisodeHeader.module.scss';

const cardEpisodeHeader = ({ theme, card: episode }) => {
  return (
    <div className={[styles.Card, styles[theme]].join(' ')}>
      <img className={styles.Card__Image} src={episode.image} alt={episode.title} />
      <div className={styles.Card__Details}>
        <p className={styles.Card__Title}>{episode.episode}</p>
        <p className={styles.Card__SubTitle}>{episode.title}</p>
      </div>
    </div>
  );
};

cardEpisodeHeader.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardEpisodeHeader.defaultProps = {
  theme: 'DarkTheme',
};

export default cardEpisodeHeader;
