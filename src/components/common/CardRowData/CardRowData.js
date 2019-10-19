import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardRowData.module.scss';

const cardRowData = props => {
  return (
    <p className={[styles[props.theme]].join(' ')}>
      <span className={styles.CardDataLabel}>{props.label}</span>
      <span className={styles.CardDataValue}>{props.children}</span>
    </p>
  );
};

cardRowData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
};

export default cardRowData;
