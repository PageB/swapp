import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ type, placeholder, name, value, autocomplete, onChange }) => {
  return (
    <input
      className={styles.Input}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      autoComplete={autocomplete}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
