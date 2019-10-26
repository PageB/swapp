import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const { data, error, loading } = useQuery(EPISODE);
  const history = useHistory();

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  const {
    episode: { people },
  } = data;

  const navigationHandler = card => {
    history.push(`/characters/${card.id}`, card);
  };

  return (
    <ThemeConsumer>
      {props => {
        return (
          <div className={styles.EpisodeCard}>
            <CardEpisodeHeader card={data.episode} theme={props} />
            <CardEpisodeSummary card={data.episode} theme={props} />
            <CardList
              theme={props}
              cards={people.edges}
              component={CardLink}
              cardNavigation={navigationHandler}
            />
            <Button theme={props}>Load More</Button>
          </div>
        );
      }}
    </ThemeConsumer>
  );
};

export default Episode;
