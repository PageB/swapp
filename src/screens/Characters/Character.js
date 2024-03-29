import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { CardList, CardLink, CardCharacter, Loading, LoadingError } from '../../components';
import ThemeContext from '../../contexts/ThemeContext';
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
  if (error) return <LoadingError />;

  const {
    person: { starships },
  } = data;

  /**
   * Navigate user with react-router.
   *
   * @method navigationHandler
   * @param {Object} card
   */
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
