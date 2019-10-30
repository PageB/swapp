import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { CardList, CardEpisode, Loading, LoadingError } from '../../components';
import ThemeContext from '../../contexts/ThemeContext';
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

  /**
   * Navigate user with react-router.
   *
   * @method navigationHandler
   * @param {Object} card
   */
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
