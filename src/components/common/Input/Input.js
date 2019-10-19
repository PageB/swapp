import React from 'react';

import styles from './Input.module.scss';

const input = props => {
  return (
    <input
      className={styles.Input}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default input;
