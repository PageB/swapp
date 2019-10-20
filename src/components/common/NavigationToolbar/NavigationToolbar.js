import React from 'react';
import PropTypes from 'prop-types';
import SWLogo from '../../../assets/images/SWLogo.png';
import { Link } from 'react-router-dom';

import styles from './NavigationToolbar.module.scss';

const navigationToolbar = props => {
  return (
    <header className={[styles.Toolbar, styles[props.theme]].join(' ')}>
      <div className={styles.Toolbar__Logo} onClick={props.themeChanged}>
        <img src={SWLogo} alt="StarWars App" />
      </div>
      <nav className={styles.Toolbar__Menu}>
        <Link to="/episodes">Episodes</Link>
        <Link to="/characters">Characters</Link>
        {/* <Link>Logout</Link> */}
      </nav>
    </header>
  );
};

navigationToolbar.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

navigationToolbar.defaultProps = {
  theme: 'DarkTheme',
};

export default navigationToolbar;
