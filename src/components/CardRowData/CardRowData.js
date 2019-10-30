import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardRowData.module.scss';

const cardRowData = ({ theme, label, children }) => {
  return (
    <p className={[styles.Row, styles[theme]].join(' ')}>
      <span className={styles.Row__DataLabel}>{label}</span>
      <span className={styles.Row__DataValue}>{children}</span>
    </p>
  );
};

cardRowData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

cardRowData.defaultProps = {
  theme: 'DarkTheme',
};

export default cardRowData;
