import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../../components/Loading/Loading';
import CardList from '../../components/CardList/CardList';
import CardLink from '../../components/CardLink/CardLink';
import CardCharacter from '../../components/CardCharacter/CardCharacter';
import { CHARACTER } from '../../queries/characters';

import styles from './Character.module.scss';

const Character = () => {
  const theme = useContext(ThemeContext);
  const { characterId } = useParams();
  const history = useHistory();
  const { data, error, loading } = useQuery(CHARACTER, {
    variables: { id: characterId },
  });

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  const {
    person: { starships },
  } = data;

  const navigationHandler = card => {
    history.push(`/starships/${card.id}`, card);
  };

  return (
    <div className={[styles.CharacterCard, styles[theme]].join(' ')}>
      <p className={styles.CharacterCard__Header}>{data.person.name}</p>
      <div className={styles.CharacterCard__Body}>
        <CardCharacter card={data.person} theme={theme} />
        {starships.edges.length > 0 && (
          <div className={styles.CharacterCard__ShipList}>
            <p className={styles.CharacterCard__ShipListTitle}>Piloted Starships</p>
            <CardList
              direction={'column'}
              theme={theme}
              cards={starships.edges}
              component={CardLink}
              cardNavigation={navigationHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Character;
