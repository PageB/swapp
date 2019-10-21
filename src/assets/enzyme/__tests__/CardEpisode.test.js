import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { starWarsEpisodes } from '../../../mock/data';

import CardEpisode from '../../CardEpisode/CardEpisode';

configure({ adapter: new Adapter() });

describe('CardEpisode Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardEpisode card={starWarsEpisodes[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
