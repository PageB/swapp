import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { starWarsCharacters } from '../../../mock/data';

import CardCharacter from '../../CardCharacter/CardCharacter';

configure({ adapter: new Adapter() });

describe('CardCharacter Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardCharacter card={starWarsCharacters[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
