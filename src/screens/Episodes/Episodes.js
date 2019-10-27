import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import CardList from '../../components/CardList/CardList';
import CardEpisode from '../../components/CardEpisode/CardEpisode';
import Loading from '../../components/Loading/Loading';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { ALL_EPISODES } from '../../queries/episodes';

const Episodes = () => {
  const { data, error, loading } = useQuery(ALL_EPISODES);
  const history = useHistory();

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  const {
    allEpisodes: { edges },
  } = data;

  const navigationHandler = card => {
    history.push(`/episodes/${card.id}`, card);
  };

  return (
    <ThemeConsumer>
      {props => {
        return (
          <CardList
            component={CardEpisode}
            cards={edges}
            theme={props}
            cardNavigation={navigationHandler}
          />
        );
      }}
    </ThemeConsumer>
  );
};

export default Episodes;
