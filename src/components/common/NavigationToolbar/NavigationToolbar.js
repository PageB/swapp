import React from 'react';
import styles from './NavigationToolbar.module.css';
import SWLogo from '../../../assets/images/SWLogo.jpg';
import { Link } from 'react-router-dom';

const navigationToolbar = () => {
  return (
    <header className={styles.Toolbar}>
      <div className={styles.Logo}>
        <img src={SWLogo} alt="StarWars App" />
      </div>
      <nav className={styles.NavMenu}>
        <Link to="/episodes">Episodes</Link>
        <Link to="/characters">Characters</Link>
        {/* <Link>Logout</Link> */}
      </nav>
    </header>
  );
};

export default navigationToolbar;
