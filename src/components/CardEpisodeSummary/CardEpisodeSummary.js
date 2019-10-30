import React from 'react';
import PropTypes from 'prop-types';

import CardRowData from '../CardRowData/CardRowData';
import styles from './CardEpisodeSummary.module.scss';

const cardEpisodeSummary = ({ theme, card: episode }) => {
  return (
    <div className={[styles.Card, styles[theme]].join(' ')}>
      <div className={styles.Card__Details}>
        <p className={styles.Card__Summary}>{episode.openingCrawl}</p>
        <CardRowData label="Director: " theme={theme}>
          {episode.director}
        </CardRowData>
        <CardRowData label="Release date: " theme={theme}>
          {episode.releaseDate}
        </CardRowData>
      </div>
    </div>
  );
};

cardEpisodeSummary.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardEpisodeSummary.defaultProps = {
  theme: 'DarkTheme',
};

export default cardEpisodeSummary;
