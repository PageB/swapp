import React from 'react';
import styles from './Button.module.css';

const button = props => {
  return (
    <button
      className={[styles.Button, styles[props.btnTheme]].join(' ')}
      type={props.type}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default button;
