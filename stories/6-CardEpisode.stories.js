import React from 'react';
import CardEpisode from '../src/components/CardEpisode/CardEpisode';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardEpisode',
};

const episode = {
  id: 100,
  title: "The Phantom Menace",
  summary: "The Trade Federation upsets order and disrupts peace in the Galactic Republic by blockading the planet Naboo in preparation for a full-scale invasion. The Republic's leader, Supreme Chancellor Valorum, dispatches Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, to negotiate with Trade Federation Viceroy Nute Gunray. Darth Sidious, a Sith Lord and the Trade Federation's secret benefactor, orders the Viceroy to kill the Jedi and begin their invasion with an army of battle droids. The Jedi escape and flee to Naboo. During the invasion, Qui-Gon saves the life of a clumsy Gungan outcast, Jar Jar Binks, from being run over by a droid transport. Indebted to Qui-Gon, Jar Jar leads the Jedi to Otoh Gunga, an underwater city of Naboo. The Jedi try to persuade the Gungan leader, Boss Nass, to help the planet's surface dwellers, but are unsuccessful. However, the Jedi manage to obtain Jar Jar's guidance and underwater transport to Theed, the capital city of Naboo; they narrowly avoid getting eaten by sea monsters on the way. They rescue Naboo's queen, Padmé Amidala, and escape from the blockaded planet on her Royal Starship, intending to reach the Republic capital planet of Coruscant.",
  image: "https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SX522_.jpg"
}

export const CardEpisodeView = () => <CardEpisode card={episode} navTo={action('Handle input change action.')}/>;
