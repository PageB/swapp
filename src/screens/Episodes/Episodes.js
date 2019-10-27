import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import CardList from '../../components/CardList/CardList';
import CardEpisode from '../../components/CardEpisode/CardEpisode';
import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import { ALL_EPISODES } from '../../queries/episodes';

const Episodes = () => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const { data, error, loading } = useQuery(ALL_EPISODES);

  if (loading) return <Loading />;
  if (error) return <LoadingError theme={theme} />;

  const {
    allEpisodes: { edges },
  } = data;

  const navigationHandler = card => {
    history.push(`/episodes/${card.id}`, card);
  };

  return (
    <CardList
      component={CardEpisode}
      cards={edges}
      theme={theme}
      cardNavigation={navigationHandler}
    />
  );
};

export default Episodes;
