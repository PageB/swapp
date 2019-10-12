import React from 'react';
import styles from './CardRowData.module.css';

const cardRowData = props => {
  return (
    <p>
      <span className={styles.CardDataLabel}>{props.label} </span>
      <span className={styles.CardDataValue}>{props.children}</span>
    </p>
  );
};

export default cardRowData;
