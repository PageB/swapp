import React from 'react';
import CardEpisodeSummary from '../src/components/common/CardEpisodeSummary/CardEpisodeSummary';
import { starWarsEpisodes } from '../src/data';

export default {
  title: 'SW CardEpisodeSummary',
};

export const cardEpisodeSummary = () => <CardEpisodeSummary card={starWarsEpisodes[0]}/>;