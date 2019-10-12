import React from 'react';
import CardButton from '../src/components/CardButton/CardButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardButton',
};

const character = {
  id: 100,
  name: "Obi-Wan Kenobi",
  image: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"
}

export const CardButtonView = () => <CardButton card={character} navTo={action('Handle input change action.')}/>;
