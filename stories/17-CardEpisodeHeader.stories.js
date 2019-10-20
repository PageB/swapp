import React from 'react';
import CardEpisodeHeader from '../src/components/common/CardEpisodeHeader/CardEpisodeHeader';
import { starWarsEpisodes } from '../src/data';

export default {
  title: 'SW CardEpisodeHeader',
};

export const cardEpisodeHeader = () => <CardEpisodeHeader card={starWarsEpisodes[0]}/>;