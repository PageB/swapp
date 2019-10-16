import React from 'react';
import styles from './NavigationToolbar.module.css';
import SWLogo from '../../../assets/images/SWLogo.png';
import { Link } from 'react-router-dom';

const navigationToolbar = props => {
  return (
    <header className={[styles.Toolbar, styles[props.theme]].join(' ')}>
      <div className={styles.Logo} onClick={props.themeChanged}>
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
