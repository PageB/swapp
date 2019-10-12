import React from 'react';
import CardChart from '../src/components/CardChart/CardChart';

export default {
  title: 'SW CardChart',
};

const character = {
  id: 100,
  name: "Jedi Starfighter",
  image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
  class: 'starfighter',
  cost: '180000 credits',
  crew: 1,
  speed: 1159,
  rating: 1
}

export const CardChartView = () => <CardChart/>;
