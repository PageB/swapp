import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { starWarsEpisodes } from '../../../mock/data';

import CardEpisodeSummary from '../../CardEpisodeSummary/CardEpisodeSummary';

configure({ adapter: new Adapter() });

describe('CardEpisodeSummary Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardEpisodeSummary card={starWarsEpisodes[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
