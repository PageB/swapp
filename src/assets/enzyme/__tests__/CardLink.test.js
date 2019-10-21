import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { starWarsCharacters } from '../../../mock/data';

import CardLink from '../../CardLink/CardLink';

configure({ adapter: new Adapter() });

describe('CardLink Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardLink card={starWarsCharacters[0].starships[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
