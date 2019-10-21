import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { starWarsCharacters } from '../../../mock/data';

import CardCharacter from '../../../components/CardCharacter/CardCharacter';
import CardList from '../../../components/CardList/CardList';

configure({ adapter: new Adapter() });

describe('CardList Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <CardList cards={starWarsCharacters} component={CardCharacter} direction="row" />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
