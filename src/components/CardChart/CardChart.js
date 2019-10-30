import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

import { Loading, LoadingError } from '../../components';
import { ALL_STARSHIPS } from '../../queries/starships';
import styles from './CardChart.module.scss';

const CardChart = props => {
  const { data, error, loading } = useQuery(ALL_STARSHIPS);

  if (loading) return <Loading />;
  if (error) return <LoadingError />;

  const {
    allStarships: { edges },
  } = data;

  const filteredStarshipsByClass = edges.filter(
    edge => edge.node.starshipClass === props.starship.starshipClass,
  );

  const findMaxClassValuePerProperty = property => {
    return Math.max(
      ...filteredStarshipsByClass.map(starship =>
        starship.node[property] !== null ? starship.node[property] : 0,
      ),
    );
  };

  const options = {
    labels: ['ML', 'Cost', 'Crew', 'Speed', 'Rating'],
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: '#EFF2F7 ',
          connectorColors: '#EFF2F7',
          fill: {
            colors: ['#000000'],
          },
        },
      },
    },
    dataLabels: {
      style: {
        colors: ['#4BD5EE'],
      },
    },
    chart: {
      background: '#000',
      toolbar: {
        show: false,
      },
    },
    colors: ['#FFE300'],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: '#FF4560',
      strokeWidth: 2,
    },
    yaxis: {
      show: false,
      tickAmount: 5,
    },
  };
  const series = [
    {
      name: props.starship.name,
      data: [
        props.starship.maxMLPerHour !== null ? props.starship.maxMLPerHour : 0,
        props.starship.cost !== null ? props.starship.cost : 0,
        props.starship.crew !== null ? props.starship.crew : 0,
        props.starship.maxAtmosphericSpeed !== null ? props.starship.maxAtmosphericSpeed : 0,
        props.starship.hyperdriveRating !== null ? props.starship.hyperdriveRating : 0,
      ],
    },
    {
      name: 'Starship Class Max',
      data: [
        findMaxClassValuePerProperty('maxMLPerHour'),
        findMaxClassValuePerProperty('cost'),
        findMaxClassValuePerProperty('crew'),
        findMaxClassValuePerProperty('hyperdriveRating'),
        findMaxClassValuePerProperty('maxAtmosphericSpeed'),
      ],
    },
  ];

  return (
    <div className={[styles.Chart, styles[props.theme]].join(' ')}>
      <Chart options={options} series={series} type="radar" height="350" />
    </div>
  );
};

CardChart.propTypes = {
  theme: PropTypes.oneOf(['DarkTheme', 'LightTheme']),
};

CardChart.defaultProps = {
  theme: 'DarkTheme',
};

export default CardChart;
