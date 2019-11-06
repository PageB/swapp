import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { starWarsCharacters } from '../../../mock/data';

import CardChart from '../../../components/CardChart/CardChart';

configure({ adapter: new Adapter() });

describe('CardChart Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <CardChart
        starship={starWarsCharacters[0].node.starships[0]}
        starships={starWarsCharacters[0].node.starships}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
