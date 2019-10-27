import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import CardLink from '../../components/CardLink/CardLink';
import CardEpisodeHeader from '../../components/CardEpisodeHeader/CardEpisodeHeader';
import CardEpisodeSummary from '../../components/CardEpisodeSummary/CardEpisodeSummary';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { EPISODE } from '../../queries/episodes';

import styles from './Episode.module.scss';

const Episode = () => {
  const { state } = useLocation();
  const { episodeId } = useParams();
  const history = useHistory();
  const { data, error, loading, fetchMore } = useQuery(EPISODE, {
    variables: { id: episodeId, first: 5 },
  });

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  const {
    episode: { people },
  } = data;

  const loadMore = () => {
    fetchMore({
      variables: { id: episodeId, first: 5, after: people.pageInfo.endCursor },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        if (!episode.people.edges.length) {
          return prev;
        }

        return {
          ...episode,
          people: {
            edges: [...prev.episode.people.edges, ...episode.people.edges],
          },
        };
      },
    });
  };

  const navigationHandler = card => {
    history.push(`/characters/${card.id}`, card);
  };

  return (
    <ThemeConsumer>
      {props => {
        return (
          <div className={styles.EpisodeCard}>
            <CardEpisodeHeader card={state} theme={props} />
            <CardEpisodeSummary card={state} theme={props} />
            <CardList
              theme={props}
              cards={people.edges}
              component={CardLink}
              cardNavigation={navigationHandler}
            />
            {people.pageInfo.hasNextPage && (
              <Button onClick={loadMore} theme={props}>
                Load More
              </Button>
            )}
          </div>
        );
      }}
    </ThemeConsumer>
  );
};

export default Episode;
