import React, { Component } from 'react';
import styles from './CardList.module.css';

class cardList extends Component {
  /**
   * Loop all cards and render each as JSX item.
   *
   * @method renderCardItems
   * @param {JSX Object} CardItem
   * @param {Object} cards
   * @return {JSX Object}
   */
  renderCardItems(CardItem, cards, theme) {
    return cards.map(card => {
      return <CardItem key={card.id} card={card} theme={theme} />;
    });
  }

  /**
   * Render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    const { component: CardItem, cards, theme } = this.props;

    return <div className={styles.CardList}>{this.renderCardItems(CardItem, cards, theme)}</div>;
  }
}

export default cardList;
