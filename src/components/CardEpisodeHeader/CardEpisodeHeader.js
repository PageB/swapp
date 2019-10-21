import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardEpisodeHeader.module.scss';

const cardEpisodeHeader = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <img className={styles.Card__Image} src={props.card.image} alt={props.card.title} />
      <div className={styles.Card__Details}>
        <p className={styles.Card__Title}>{props.card.episode}</p>
        <p className={styles.Card__SubTitle}>{props.card.title}</p>
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
