import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CardStarship from '../../../components/CardStarship/CardStarship';
import { starWarsCharacters } from '../../../mock/data';

configure({ adapter: new Adapter() });

describe('CardStarship Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardStarship starship={starWarsCharacters[0].node.starships[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
