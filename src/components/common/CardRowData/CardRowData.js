import React from 'react';

import styles from './CardRowData.module.scss';

const cardRowData = props => {
  return (
    <p className={[styles[props.theme]].join(' ')}>
      <span className={styles.CardDataLabel}>{props.label}</span>
      <span className={styles.CardDataValue}>{props.children}</span>
    </p>
  );
};

export default cardRowData;
