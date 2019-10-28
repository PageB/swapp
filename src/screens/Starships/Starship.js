import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import CardChart from '../../components/CardChart/CardChart';
import CardStarship from '../../components/CardStarship/CardStarship';

import ThemeContext from '../../contexts/ThemeContext';

import { STARSHIP } from '../../queries/starships';

import styles from './Starship.module.scss';

const Starship = () => {
  const theme = useContext(ThemeContext);
  const { starshipId } = useParams();
  const { data, error, loading } = useQuery(STARSHIP, {
    variables: { id: starshipId },
  });

  if (loading) return <Loading />;
  if (error) return <LoadingError />;

  return (
    <div className={[styles.StarshipCard, styles[theme]].join(' ')}>
      <p className={styles.StarshipCard__Header}>{data.starship.name}</p>
      <p className={styles.StarshipCard__SubHeader}>{data.starship.model}</p>
      <div className={styles.StarshipCard__Body}>
        <CardStarship starship={data.starship} theme={theme} />
        <div className={styles.ChartCard}>
          <p className={styles.ChartCard__Title}>Compared to Starship Class Max</p>
          <CardChart starship={data.starship} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Starship;
