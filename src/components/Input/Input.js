import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = props => {
  return (
    <input
      className={styles.Input}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      autoComplete={props.autocomplete}
      onChange={props.onChange}
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
