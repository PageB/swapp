import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardLink.module.scss';

const cardLink = ({ theme, card, navigate }) => {
  return (
    <div className={[styles.Card, styles[theme]].join(' ')} onClick={() => navigate(card.node)}>
      <img className={styles.Card__Image} src={card.node.image} alt={card.node.name} />
      <div className={styles.Card__Title}>
        <p className={styles.Card__Text}>{card.node.name}</p>
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
