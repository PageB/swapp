import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/ThemeContext';
import SWLogo from '../../assets/images/SWLogo.png';
import { Link } from 'react-router-dom';

import styles from './NavigationToolbar.module.scss';

const NavigationToolbar = props => {
  const theme = useContext(ThemeContext);

  return (
    <header className={[styles.Toolbar, styles[theme]].join(' ')}>
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

NavigationToolbar.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

NavigationToolbar.defaultProps = {
  theme: 'DarkTheme',
};

export default NavigationToolbar;
