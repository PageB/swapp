import React from 'react';

import Spinner from './../../assets/images/giphy.gif';
import styles from './Loading.module.scss';

const Loading = props => {
  return (
    <div className={styles.Loading}>
      <img className={styles.Loading__Image} src={Spinner} alt="Loading" />
    </div>
  );
};

export default Loading;
