import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import {
  Button,
  CardList,
  CardLink,
  CardEpisodeHeader,
  CardEpisodeSummary,
  Loading,
  LoadingError,
} from '../../components';
import ThemeContext from '../../contexts/ThemeContext';
import { EPISODE } from '../../queries/episodes';
import styles from './Episode.module.scss';

const Episode = () => {
  const theme = useContext(ThemeContext);
  const { episodeId } = useParams();
  const history = useHistory();
  const { data, error, loading, fetchMore } = useQuery(EPISODE, {
    variables: { id: episodeId, first: 5 },
  });

  if (loading) return <Loading />;
  if (error) return <LoadingError />;

  const { episode } = data;
  const { people } = episode;

  /**
   * Fetch more episode to people relation
   * and update current state on success.
   *
   * @method loadMore
   */
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
      <CardEpisodeHeader card={episode} theme={theme} />
      <CardEpisodeSummary card={episode} theme={theme} />
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
