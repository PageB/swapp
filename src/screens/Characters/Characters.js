import React, { Fragment, useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import CardList from '../../components/CardList/CardList';
import CardLink from '../../components/CardLink/CardLink';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import { ALL_CHARACTERS } from '../../queries/characters';

const Characters = () => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const { data, error, loading, fetchMore } = useQuery(ALL_CHARACTERS);

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  const {
    allPeople: { edges, pageInfo },
  } = data;

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
        <Button onClick={loadMore} theme={theme}>
          Load More
        </Button>
      )}
    </Fragment>
  );
};

export default Characters;
