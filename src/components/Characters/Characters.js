import React, { Component, Fragment } from 'react';
import CardList from '../common/CardList/CardList';
import CardCharacterLink from '../common/CardCharacterLink/CardCharacterLink';

class Characters extends Component {
  state = {
    characters: [{
      id: 1,
      name: "Obi-Wan Kenobi",
      image: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 2,
      name: "Princess Leia",
      image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218591-5-leia-a09cab78-e7a1-4be4-b437-99a1d7d4d280.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 3,
      name: "Yoda",
      image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218589-4-yoda-6a430ef2-4be5-43d5-8614-e743ca7b2f69.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 4,
      name: "Boba Fett",
      image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218587-3-boba-fett-9dce897b-f605-4fae-9de7-dfbf95ab1a2d.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 5,
      name: "Darth Vader",
      image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218586-2-vader-f6cdf838-912c-4bfa-8a12-f43521fbd99c.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 6,
      name: "Han Solo",
      image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218584-1-han-f4c9a887-81df-4c58-b166-94ab4485286b.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 7,
      name: "BB-8",
      image: "https://www.rollingstone.com/wp-content/uploads/2015/12/bb8.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 8,
      name: "R2-D2",
      image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-218664-7-r2d2-cc3a79ac-5212-4452-852d-27eacea91652.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    },{
      id: 9,
      name: "Luke Skywalker",
      image: "https://www.rollingstone.com/wp-content/uploads/2015/12/rs-218592-6-luke-cd70ba0f-828e-4231-9c8d-f8d6ab92a07b.jpg?resize=1240,1240&w=385",
      height: 182,
      weight: 77,
      species: 'Human',
      world: 'Stewjon',
      starships: [{
        id: 100,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 200,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      },{
        id: 300,
        name: "Jedi Starfighter",
        image: "https://www.super-hobby.com/zdjecia/7/1/9/20828_rd.jpg",
        class: 'starfighter',
        cost: '180000 credits',
        crew: 1,
        speed: 1159,
        rating: 1
      }]
    }]
  };

  render() {
    return (
      <Fragment>
        <CardList component={CardCharacterLink} cards={this.state.characters}/>
      </Fragment>
    );
  }
};

export default Characters;