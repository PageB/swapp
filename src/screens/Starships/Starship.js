import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../../components/Loading/Loading';
import CardChart from '../../components/CardChart/CardChart';
import CardStarship from '../../components/CardStarship/CardStarship';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { STARSHIP } from '../../queries/starships';

import styles from './Starship.module.scss';

const Starship = () => {
  const { data, error, loading } = useQuery(STARSHIP);

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  return (
    <ThemeConsumer>
      {props => {
        return (
          <div className={[styles.StarshipCard, styles[props]].join(' ')}>
            <p className={styles.StarshipCard__Header}>{data.starship.name}</p>
            <p className={styles.StarshipCard__SubHeader}>{data.starship.model}</p>
            <div className={styles.StarshipCard__Body}>
              <CardStarship starship={data.starship} theme={props} />
              <div className={styles.ChartCard}>
                <p className={styles.ChartCard__Title}>Compared to Starship Class Max</p>
                <CardChart starship={data.starship} theme={props} />
              </div>
            </div>
          </div>
        );
      }}
    </ThemeConsumer>
  );
};

export default Starship;
