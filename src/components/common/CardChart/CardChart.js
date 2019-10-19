import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import styles from './CardChart.module.scss';

class CardChart extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      options: {
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
        yaxis: {
          show: false,
          max: 3000,
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
        labels: ['ML', 'Cost', 'Crew', 'Speed', 'Rating'],
      },
      series: [
        {
          name: props.name,
          data: [
            props.starship.maxMLPerHour,
            props.starship.cost,
            props.starship.crew,
            props.starship.maxAtmosphericSpeed,
            props.starship.hyperdriveRating,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className={[styles.Chart, styles[this.props.theme]].join(' ')}>
        <p>{this.state.name}</p>
        <Chart options={this.state.options} series={this.state.series} type="radar" height="350" />
      </div>
    );
  }
}

export default CardChart;
