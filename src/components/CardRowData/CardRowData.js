import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardRowData.module.scss';

const cardRowData = props => {
  return (
    <p className={[styles.Row, styles[props.theme]].join(' ')}>
      <span className={styles.Row__DataLabel}>{props.label}</span>
      <span className={styles.Row__DataValue}>{props.children}</span>
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
