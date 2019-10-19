import React, { Component, Fragment } from 'react';
import CardList from '../common/CardList/CardList';
import CardCharacterLink from '../common/CardCharacterLink/CardCharacterLink';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { fetchStarWarsCharacters } from '../../data';

class Characters extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    try {
      const starWarsCharacters = await fetchStarWarsCharacters();
      this.setState({ characters: starWarsCharacters });
    } catch (e) {
      this.setState({ characters: [] });
    }
  }

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <Fragment>
              <CardList component={CardCharacterLink} cards={this.state.characters} theme={props} />
            </Fragment>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Characters;
