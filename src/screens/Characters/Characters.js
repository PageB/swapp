import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import CardList from '../../components/CardList/CardList';
import CardLink from '../../components/CardLink/CardLink';
import Loading from '../../components/Loading/Loading';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { ALL_CHARACTERS } from '../../queries/characters';

const Characters = () => {
  const { data, error, loading } = useQuery(ALL_CHARACTERS);
  const history = useHistory();

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  const {
    allPeople: { edges },
  } = data;

  const navigationHandler = card => {
    history.push(`/characters/${card.id}`, card);
  };

  return (
    <ThemeConsumer>
      {props => {
        return (
          <Fragment>
            <CardList
              theme={props}
              cards={edges}
              component={CardLink}
              cardNavigation={navigationHandler}
            />
          </Fragment>
        );
      }}
    </ThemeConsumer>
  );
};

export default Characters;
