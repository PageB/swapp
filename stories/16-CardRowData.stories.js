import React from 'react';
import CardChart from '../src/components/common/CardChart/CardChart';
import { starWarsCharacters } from '../src/mock/data'

export default {
  title: 'SW CardChart',
};

export const cardChart = () => <CardChart starship={starWarsCharacters[0].starships[0]}/>;
