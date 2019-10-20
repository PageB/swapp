import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './CardList.module.scss';

class cardList extends Component {
  /**
   * Loop all cards and render each as JSX item.
   *
   * @method renderCardItems
   * @param {JSX Object} CardItem
   * @param {Object} cards
   * @return {JSX Object}
   */
  renderCardItems(cards, CardItem, cardTheme, cardNavigation) {
    return cards.map(card => {
      return <CardItem key={card.id} card={card} theme={cardTheme} navigate={cardNavigation} />;
    });
  }

  /**
   * Render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    const { cards, component: CardItem, theme: cardTheme, cardNavigation, direction } = this.props;

    return (
      <div className={styles.CardList} style={{ flexDirection: direction }}>
        {this.renderCardItems(cards, CardItem, cardTheme, cardNavigation)}
      </div>
    );
  }
}

cardList.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']),
};

cardList.defaultProps = {
  direction: 'row',
};

export default cardList;
