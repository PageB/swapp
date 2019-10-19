import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import styles from './CardChart.module.scss';

class CardChart extends Component {
  constructor(props) {
    super(props);
    
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
          max: 500,
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
        labels: ['Class', 'Cost', 'Crew', 'Speed', 'Rating'],
      },
      series: [
        {
          name: props.name,
          data: [80, 50, 30, 40, 100],
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
