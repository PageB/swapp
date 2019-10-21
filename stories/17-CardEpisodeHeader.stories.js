import React from 'react';
import CardEpisodeHeader from '../src/components/CardEpisodeHeader/CardEpisodeHeader';
import { starWarsEpisodes } from '../src/mock/data';

export default {
  title: 'SW CardEpisodeHeader',
};

export const cardEpisodeHeader = () => <CardEpisodeHeader card={starWarsEpisodes[0]}/>;