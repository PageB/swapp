import React from 'react';
import CardList from '../src/components/CardList/CardList';
import cardEpisode from '../src/components/CardEpisode/CardEpisode';
import CardButton from '../src/components/CardButton/CardButton';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'SW CardList',
};

const episodes = [{
  id: 100,
  title: "The Phantom Menace",
  summary: "The Trade Federation upsets order and disrupts peace in the Galactic Republic by blockading the planet Naboo in preparation for a full-scale invasion. The Republic's leader, Supreme Chancellor Valorum, dispatches Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, to negotiate with Trade Federation Viceroy Nute Gunray. Darth Sidious, a Sith Lord and the Trade Federation's secret benefactor, orders the Viceroy to kill the Jedi and begin their invasion with an army of battle droids. The Jedi escape and flee to Naboo. During the invasion, Qui-Gon saves the life of a clumsy Gungan outcast, Jar Jar Binks, from being run over by a droid transport. Indebted to Qui-Gon, Jar Jar leads the Jedi to Otoh Gunga, an underwater city of Naboo. The Jedi try to persuade the Gungan leader, Boss Nass, to help the planet's surface dwellers, but are unsuccessful. However, the Jedi manage to obtain Jar Jar's guidance and underwater transport to Theed, the capital city of Naboo; they narrowly avoid getting eaten by sea monsters on the way. They rescue Naboo's queen, Padmé Amidala, and escape from the blockaded planet on her Royal Starship, intending to reach the Republic capital planet of Coruscant.",
  image: "https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SX522_.jpg"
},{
  id: 200,
  title: "Attack of the Clones",
  summary: "Ten years after the Trade Federation's invasion of Naboo, the Galactic Republic is threatened by the Separatist movement organized by former Jedi Master Count Dooku. Senator Padmé Amidala comes to Coruscant to vote on a motion to create an army to assist the Jedi against this threat. Narrowly avoiding an assassination attempt upon her arrival, she is placed under the protection of Jedi Master Obi-Wan Kenobi and his apprentice, the 19-year-old Anakin Skywalker. The two Jedi thwart a second attempt on her life and subdue the assassin, Zam Wesell; she is killed by her client, a bounty hunter, before she can reveal his identity. The Jedi Council instructs Obi-Wan to find the bounty hunter, while Anakin is tasked to protect Padmé and escort her back to Naboo, where he expresses his romantic feelings for her.",
  image: "https://images-na.ssl-images-amazon.com/images/I/51YQo9v7ceL.jpg"
},{
  id: 300,
  title: "Revenge of the Sith",
  summary: "Three years after the beginning of the Clone Wars, Jedi Master Obi-Wan Kenobi and Jedi Knight Anakin Skywalker lead a mission to rescue the kidnapped Supreme Chancellor Palpatine from the cyborg Separatist commander, General Grievous, during a space battle over Coruscant. After infiltrating Grievous's flagship, the Jedi battle Count Dooku, whom Anakin decapitates at Palpatine's urging. Grievous escapes the battle-torn ship in which the Jedi crash-land on Coruscant. There, Anakin reunites with his wife, Padmé Amidala, who reveals that she is pregnant. While initially excited, Anakin begins to have prophetic visions of Padmé dying in childbirth.",
  image: "https://images-na.ssl-images-amazon.com/images/I/81SsLjiKqeL._SX522_.jpg"
},{
  id: 400,
  title: "A New Hope",
  summary: "The galaxy is in the midst of a civil war. Rebel spies have stolen plans to the Galactic Empire's Death Star, a colossal, moon-sized, space station capable of destroying entire planets. Imperial Senator Princess Leia, secretly one of the Rebellion's leaders, has obtained the plans, but her starship is captured by an Imperial Star Destroyer under the command of the ruthless Darth Vader. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who, along with protocol droid C-3PO, flees in an escape pod to the desert planet below, Tatooine.",
  image: "https://images-na.ssl-images-amazon.com/images/I/81ae8A9aEYL._SX522_.jpg"
}]

const characters = [{
  id: 1,
  name: "Obi-Wan Kenobi",
  image: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"
},{
  id: 2,
  name: "Princess Leia",
  image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385"
},{
  id: 3,
  name: "Yoda",
  image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385"
},{
  id: 4,
  name: "Boba Fett",
  image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218587-3-boba-fett-9dce897b-f605-4fae-9de7-dfbf95ab1a2d.jpg?resize=1240,1240&w=385"
},{
  id: 5,
  name: "Darth Vader",
  image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218586-2-vader-f6cdf838-912c-4bfa-8a12-f43521fbd99c.jpg?resize=1240,1240&w=385"
},{
  id: 6,
  name: "Han Solo",
  image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218584-1-han-f4c9a887-81df-4c58-b166-94ab4485286b.jpg?resize=1240,1240&w=385"
},{
  id: 7,
  name: "BB-8",
  image: "https://www.rollingstone.com/wp-content/uploads/2015/12/bb8.jpg?resize=1240,1240&w=385"
},{
  id: 8,
  name: "R2-D2",
  image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-218664-7-r2d2-cc3a79ac-5212-4452-852d-27eacea91652.jpg?resize=1240,1240&w=385"
},{
  id: 9,
  name: "Luke Skywalker",
  image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218592-6-luke-cd70ba0f-828e-4231-9c8d-f8d6ab92a07b.jpg?resize=1240,1240&w=385"
}]

export const cardEpisodeList = () => <CardList component={cardEpisode} cards={episodes}/>;

export const cardButtonList = () => <CardList component={CardButton} cards={characters}/>;
