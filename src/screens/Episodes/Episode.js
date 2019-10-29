import React, { useContext } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import CardLink from '../../components/CardLink/CardLink';
import CardEpisodeHeader from '../../components/CardEpisodeHeader/CardEpisodeHeader';
import CardEpisodeSummary from '../../components/CardEpisodeSummary/CardEpisodeSummary';

import ThemeContext from '../../contexts/ThemeContext';

import { EPISODE } from '../../queries/episodes';

import styles from './Episode.module.scss';

const Episode = () => {
  const theme = useContext(ThemeContext);
  const { state } = useLocation();
  const { episodeId } = useParams();
  const history = useHistory();
  const { data, error, loading, fetchMore } = useQuery(EPISODE, {
    variables: { id: episodeId, first: 5 },
  });

  if (loading) return <Loading />;
  if (error) return <LoadingError />;

  const { episode } = data;
  const { people } = episode;

  const loadMore = () => {
    fetchMore({
      variables: { id: episodeId, first: 5, after: people.pageInfo.endCursor },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        if (!episode.people.edges.length) {
          return prev;
        }

        return {
          episode: {
            ...episode,
            people: {
              ...episode.people,
              edges: [...prev.episode.people.edges, ...episode.people.edges],
            },
          },
        };
      },
    });
  };

  const navigationHandler = card => {
    history.push(`/characters/${card.id}`, card);
  };

  return (
    <div className={styles.EpisodeCard}>
      <CardEpisodeHeader card={state} theme={theme} />
      <CardEpisodeSummary card={state} theme={theme} />
      <CardList
        theme={theme}
        cards={people.edges}
        component={CardLink}
        cardNavigation={navigationHandler}
      />
      {people.pageInfo.hasNextPage && (
        <Button onClick={loadMore} theme={theme}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default Episode;
