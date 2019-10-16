import React, { Component, Fragment } from 'react';
import CardList from '../common/CardList/CardList';
import CardEpisode from '../common/CardEpisode/CardEpisode';

class Episodes extends Component {
  state = {
    episodes: [
      {
        id: 100,
        episode: 'Star Wars: Episode I',
        title: 'The Phantom Menace',
        director: 'George Lucas',
        releaseDate: '1995-05-19',
        summary:
          "The Trade Federation upsets order and disrupts peace in the Galactic Republic by blockading the planet Naboo in preparation for a full-scale invasion. The Republic's leader, Supreme Chancellor Valorum, dispatches Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, to negotiate with Trade Federation Viceroy Nute Gunray. Darth Sidious, a Sith Lord and the Trade Federation's secret benefactor, orders the Viceroy to kill the Jedi and begin their invasion with an army of battle droids. The Jedi escape and flee to Naboo. During the invasion, Qui-Gon saves the life of a clumsy Gungan outcast, Jar Jar Binks, from being run over by a droid transport. Indebted to Qui-Gon, Jar Jar leads the Jedi to Otoh Gunga, an underwater city of Naboo. The Jedi try to persuade the Gungan leader, Boss Nass, to help the planet's surface dwellers, but are unsuccessful. However, the Jedi manage to obtain Jar Jar's guidance and underwater transport to Theed, the capital city of Naboo; they narrowly avoid getting eaten by sea monsters on the way. They rescue Naboo's queen, Padmé Amidala, and escape from the blockaded planet on her Royal Starship, intending to reach the Republic capital planet of Coruscant.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SX522_.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
      {
        id: 200,
        episode: 'Star Wars: Episode II',
        title: 'Attack of the Clones',
        director: 'George Lucas',
        releaseDate: '1996-09-08',
        summary:
          "Ten years after the Trade Federation's invasion of Naboo, the Galactic Republic is threatened by the Separatist movement organized by former Jedi Master Count Dooku. Senator Padmé Amidala comes to Coruscant to vote on a motion to create an army to assist the Jedi against this threat. Narrowly avoiding an assassination attempt upon her arrival, she is placed under the protection of Jedi Master Obi-Wan Kenobi and his apprentice, the 19-year-old Anakin Skywalker. The two Jedi thwart a second attempt on her life and subdue the assassin, Zam Wesell; she is killed by her client, a bounty hunter, before she can reveal his identity. The Jedi Council instructs Obi-Wan to find the bounty hunter, while Anakin is tasked to protect Padmé and escort her back to Naboo, where he expresses his romantic feelings for her.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/51YQo9v7ceL.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
      {
        id: 300,
        title: 'Revenge of the Sith',
        episode: 'Star Wars: Episode III',
        director: 'George Lucas',
        releaseDate: '1998-03-22',
        summary:
          "Three years after the beginning of the Clone Wars, Jedi Master Obi-Wan Kenobi and Jedi Knight Anakin Skywalker lead a mission to rescue the kidnapped Supreme Chancellor Palpatine from the cyborg Separatist commander, General Grievous, during a space battle over Coruscant. After infiltrating Grievous's flagship, the Jedi battle Count Dooku, whom Anakin decapitates at Palpatine's urging. Grievous escapes the battle-torn ship in which the Jedi crash-land on Coruscant. There, Anakin reunites with his wife, Padmé Amidala, who reveals that she is pregnant. While initially excited, Anakin begins to have prophetic visions of Padmé dying in childbirth.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81SsLjiKqeL._SX522_.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
      {
        id: 400,
        title: 'A New Hope',
        episode: 'Star Wars: Episode IV',
        director: 'George Lucas',
        releaseDate: '1999-11-11',
        summary:
          "The galaxy is in the midst of a civil war. Rebel spies have stolen plans to the Galactic Empire's Death Star, a colossal, moon-sized, space station capable of destroying entire planets. Imperial Senator Princess Leia, secretly one of the Rebellion's leaders, has obtained the plans, but her starship is captured by an Imperial Star Destroyer under the command of the ruthless Darth Vader. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who, along with protocol droid C-3PO, flees in an escape pod to the desert planet below, Tatooine.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ae8A9aEYL._SX522_.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
      {
        id: 500,
        title: 'The Phantom Menace',
        episode: 'Star Wars: Episode V',
        director: 'George Lucas',
        releaseDate: '2002-05-11',
        summary:
          "The Trade Federation upsets order and disrupts peace in the Galactic Republic by blockading the planet Naboo in preparation for a full-scale invasion. The Republic's leader, Supreme Chancellor Valorum, dispatches Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, to negotiate with Trade Federation Viceroy Nute Gunray. Darth Sidious, a Sith Lord and the Trade Federation's secret benefactor, orders the Viceroy to kill the Jedi and begin their invasion with an army of battle droids. The Jedi escape and flee to Naboo. During the invasion, Qui-Gon saves the life of a clumsy Gungan outcast, Jar Jar Binks, from being run over by a droid transport. Indebted to Qui-Gon, Jar Jar leads the Jedi to Otoh Gunga, an underwater city of Naboo. The Jedi try to persuade the Gungan leader, Boss Nass, to help the planet's surface dwellers, but are unsuccessful. However, the Jedi manage to obtain Jar Jar's guidance and underwater transport to Theed, the capital city of Naboo; they narrowly avoid getting eaten by sea monsters on the way. They rescue Naboo's queen, Padmé Amidala, and escape from the blockaded planet on her Royal Starship, intending to reach the Republic capital planet of Coruscant.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SX522_.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
      {
        id: 600,
        title: 'Attack of the Clones',
        episode: 'Star Wars: Episode VI',
        director: 'George Lucas',
        releaseDate: '2005-04-08',
        summary:
          "Ten years after the Trade Federation's invasion of Naboo, the Galactic Republic is threatened by the Separatist movement organized by former Jedi Master Count Dooku. Senator Padmé Amidala comes to Coruscant to vote on a motion to create an army to assist the Jedi against this threat. Narrowly avoiding an assassination attempt upon her arrival, she is placed under the protection of Jedi Master Obi-Wan Kenobi and his apprentice, the 19-year-old Anakin Skywalker. The two Jedi thwart a second attempt on her life and subdue the assassin, Zam Wesell; she is killed by her client, a bounty hunter, before she can reveal his identity. The Jedi Council instructs Obi-Wan to find the bounty hunter, while Anakin is tasked to protect Padmé and escort her back to Naboo, where he expresses his romantic feelings for her.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/51YQo9v7ceL.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
      {
        id: 700,
        title: 'Revenge of the Sith',
        episode: 'Star Wars: Episode VII',
        director: 'George Lucas',
        releaseDate: '2007-12-07',
        summary:
          "Three years after the beginning of the Clone Wars, Jedi Master Obi-Wan Kenobi and Jedi Knight Anakin Skywalker lead a mission to rescue the kidnapped Supreme Chancellor Palpatine from the cyborg Separatist commander, General Grievous, during a space battle over Coruscant. After infiltrating Grievous's flagship, the Jedi battle Count Dooku, whom Anakin decapitates at Palpatine's urging. Grievous escapes the battle-torn ship in which the Jedi crash-land on Coruscant. There, Anakin reunites with his wife, Padmé Amidala, who reveals that she is pregnant. While initially excited, Anakin begins to have prophetic visions of Padmé dying in childbirth.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81SsLjiKqeL._SX522_.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
      {
        id: 800,
        title: 'A New Hope',
        episode: 'Star Wars: Episode VIII',
        director: 'George Lucas',
        releaseDate: '2008-03-30',
        summary:
          "The galaxy is in the midst of a civil war. Rebel spies have stolen plans to the Galactic Empire's Death Star, a colossal, moon-sized, space station capable of destroying entire planets. Imperial Senator Princess Leia, secretly one of the Rebellion's leaders, has obtained the plans, but her starship is captured by an Imperial Star Destroyer under the command of the ruthless Darth Vader. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who, along with protocol droid C-3PO, flees in an escape pod to the desert planet below, Tatooine.",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ae8A9aEYL._SX522_.jpg',
        characters: [
          {
            id: 1,
            name: 'Obi-Wan Kenobi',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 2,
            name: 'Princess Leia',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
          {
            id: 3,
            name: 'Yoda',
            image:
              'https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385',
            height: 182,
            weight: 77,
            species: 'Human',
            world: 'Stewjon',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <CardList component={CardEpisode} cards={this.state.episodes} />
      </Fragment>
    );
  }
}

export default Episodes;
