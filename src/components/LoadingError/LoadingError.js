import React from 'react';

import Image from './../../assets/images/error.gif';

import styles from './LoadingError.module.scss';

const LoadingError = () => {
  return (
    <div className={styles.LoadingError}>
      <img className={styles.LoadingError__Image} src={Image} alt="Error" />
    </div>
  );
};

export default LoadingError;
