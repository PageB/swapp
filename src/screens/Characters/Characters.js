import React, { Component, Fragment } from 'react';
import CardList from '../../components/CardList/CardList';
import CardLink from '../../components/CardLink/CardLink';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { fetchStarWarsCharacters } from '../../mock/data';

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    try {
      const starWarsCharacters = await fetchStarWarsCharacters();
      this.setState({ characters: starWarsCharacters });
    } catch (e) {
      this.setState({ characters: [] });
    }
  }

  navigationHandler = card => {
    this.props.history.push(`/character/${card.id}`, card);
  };

  render() {
    return (
      <ThemeConsumer>
        {props => {
          return (
            <Fragment>
              <CardList
                theme={props}
                cards={this.state.characters}
                component={CardLink}
                cardNavigation={this.navigationHandler}
              />
            </Fragment>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Characters;
