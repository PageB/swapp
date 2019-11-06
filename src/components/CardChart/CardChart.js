import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

import styles from './CardChart.module.scss';

const CardChart = ({ theme, starship, starships }) => {
  /**
   * Find all values by property key and return the max value.
   *
   * @method findMaxClassValuePerProperty
   * @param {String} property
   */
  const findMaxClassValuePerProperty = property => {
    return Math.max(...starships.map(ship => (ship[property] !== null ? starship[property] : 0)));
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
      name: starship.name,
      data: [
        starship.maxMLPerHour !== null ? starship.maxMLPerHour : 0,
        starship.cost !== null ? starship.cost : 0,
        starship.crew !== null ? starship.crew : 0,
        starship.maxAtmosphericSpeed !== null ? starship.maxAtmosphericSpeed : 0,
        starship.hyperdriveRating !== null ? starship.hyperdriveRating : 0,
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
    <div className={[styles.Chart, styles[theme]].join(' ')}>
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
