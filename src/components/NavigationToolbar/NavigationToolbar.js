import React from 'react';
import styles from './NavigationToolbar.module.css';
import SWLogo from '../../assets/images/SWLogo.jpg';

const navigationToolbar = () => {
  return (
    <header className={styles.Toolbar}>
      <div className={styles.Logo}>
        <img src={SWLogo} alt="StarWars App" />
      </div>
      <nav className={styles.NavMenu}>
        <a className={styles.Link} href="">
          Episodes
        </a>
        <a className={styles.Link} href="">
          Characters
        </a>
        <a className={styles.Link} href="">
          Logout
        </a>
      </nav>
    </header>
  );
};

export default navigationToolbar;
