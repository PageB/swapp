import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { CardChart, CardStarship, Loading, LoadingError } from '../../components';
import ThemeContext from '../../contexts/ThemeContext';
import { ALL_STARSHIPS } from '../../queries/starships';
import styles from './Starship.module.scss';

const Starship = () => {
  const theme = useContext(ThemeContext);
  const { state } = useLocation();
  const { data, error, loading } = useQuery(ALL_STARSHIPS);

  if (loading) return <Loading />;
  if (error) return <LoadingError />;

  const {
    allStarships: { edges },
  } = data;

  const filteredStarshipsByClass = edges.filter(
    edge => edge.node.starshipClass === state.starshipClass,
  );

  return (
    <div className={[styles.StarshipCard, styles[theme]].join(' ')}>
      <p className={styles.StarshipCard__Header}>{state.name}</p>
      <p className={styles.StarshipCard__SubHeader}>{state.model}</p>
      <div className={styles.StarshipCard__Body}>
        <CardStarship starship={state} theme={theme} />
        <div className={styles.ChartCard}>
          <p className={styles.ChartCard__Title}>Compared to Starship Class Max</p>
          <CardChart starship={state} starships={filteredStarshipsByClass} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Starship;
