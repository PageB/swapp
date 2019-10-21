import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardLink.module.scss';

const cardLink = props => {
  return (
    <div
      className={[styles.Card, styles[props.theme]].join(' ')}
      onClick={() => props.navigate(props.card)}
    >
      <img className={styles.Card__Image} src={props.card.image} alt={props.card.name} />
      <div className={styles.Card__Title}>
        <p className={styles.Card__Text}>{props.card.name}</p>
      </div>
    </div>
  );
};

cardLink.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardLink.defaultProps = {
  theme: 'DarkTheme',
};

export default cardLink;
