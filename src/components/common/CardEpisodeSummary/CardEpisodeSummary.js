import React from 'react';
import CardRowData from '../CardRowData/CardRowData';
import styles from './CardEpisodeSummary.module.css';

const cardEpisodeSummary = props => {
  return (
    <div className={[styles.Card, styles[props.theme]].join(' ')}>
      <div className={styles.CardDetails}>
        <p className={styles.CardSummary}>{props.card.summary}</p>
        <CardRowData label="Director: " theme={props.theme}>{props.card.director}</CardRowData>
        <CardRowData label="Release date: " theme={props.theme}>{props.card.releaseDate}</CardRowData>
      </div>
    </div>
  );
};

export default cardEpisodeSummary;
