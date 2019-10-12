import React from 'react';
import CardCharacter from '../src/components/CardCharacter/CardCharacter';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardCharacter',
};

const character = {
  id: 100,
  name: "Obi-Wan Kenobi",
  image: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
  height: 182,
  weight: 77,
  species: 'Human',
  world: 'Stewjon'
}

export const CardCharacterView = () => <CardCharacter card={character} navTo={action('Handle input change action.')}/>;
