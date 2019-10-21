import React from 'react';
import CardEpisodeSummary from '../src/components/CardEpisodeSummary/CardEpisodeSummary';
import { starWarsEpisodes } from '../src/mock/data';

export default {
  title: 'SW CardEpisodeSummary',
};

export const cardEpisodeSummary = () => <CardEpisodeSummary card={starWarsEpisodes[0]}/>;