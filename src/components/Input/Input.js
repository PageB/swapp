import React from 'react';
import PropTypes from 'prop-types';

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

input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

input.defaultProps = {
  type: 'text',
};

export default input;
