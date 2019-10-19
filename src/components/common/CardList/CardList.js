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
    const { component: CardItem, cards, theme, direction } = this.props;

    return (
      <div className={styles.CardList} style={{ flexDirection: direction }}>
        {this.renderCardItems(CardItem, cards, theme)}
      </div>
    );
  }
}

cardList.propTypes = {
  direction: PropTypes.string,
  direction: PropTypes.oneOf(['column', 'row']),
};

cardList.defaultProps = {
  direction: 'row',
};

export default cardList;
