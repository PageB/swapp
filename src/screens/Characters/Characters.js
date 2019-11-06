import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Button, CardList, CardLink, Loading, LoadingError } from '../../components';
import ThemeContext from '../../contexts/ThemeContext';
import { ALL_CHARACTERS } from '../../queries/characters';
import styles from './Characters.module.scss';

const Characters = () => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const { data, error, loading, fetchMore } = useQuery(ALL_CHARACTERS);

  if (loading) return <Loading />;
  if (error) return <LoadingError />;

  const {
    allPeople: { edges, pageInfo },
  } = data;

  /**
   * Fetch more episode to people relation
   * and update current state on success.
   *
   * @method loadMore
   */
  const loadMore = () => {
    fetchMore({
      variables: { after: pageInfo.endCursor },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!allPeople.edges.length) {
          return prev;
        }

        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
          },
        };
      },
    });
  };

  const navigationHandler = card => {
    history.push(`/characters/${card.id}`, card);
  };

  return (
    <Fragment>
      <CardList
        theme={theme}
        cards={edges}
        component={CardLink}
        cardNavigation={navigationHandler}
      />
      {pageInfo.hasNextPage && (
        <div className={styles.CharactersList__Button}>
          <Button onClick={loadMore} theme={theme}>
            Load More
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default Characters;
