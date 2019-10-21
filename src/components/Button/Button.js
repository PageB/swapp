import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = props => {
  return (
    <button
      className={[styles.Button, styles[props.theme]].join(' ')}
      type={props.type}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  theme: 'DarkTheme',
  type: 'button',
};

export default Button;
