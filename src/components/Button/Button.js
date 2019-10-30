import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ type, theme, children, onClick }) => {
  return (
    <button className={[styles.Button, styles[theme]].join(' ')} type={type} onClick={onClick}>
      <span>{children}</span>
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
