import React from 'react';
import PropTypes from 'prop-types';

import CardRowData from '../CardRowData/CardRowData';
import styles from './CardEpisodeSummary.module.scss';

const cardEpisodeSummary = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <div className={styles.Card__Details}>
        <p className={styles.Card__Summary}>{props.card.openingCrawl}</p>
        <CardRowData label="Director: " theme={props.theme}>
          {props.card.director}
        </CardRowData>
        <CardRowData label="Release date: " theme={props.theme}>
          {props.card.releaseDate}
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
