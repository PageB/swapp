import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { starWarsEpisodes } from '../../../mock/data';

import CardEpisodeHeader from '../../../components/CardEpisodeHeader/CardEpisodeHeader';

configure({ adapter: new Adapter() });

describe('CardEpisodeHeader Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardEpisodeHeader card={starWarsEpisodes[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
