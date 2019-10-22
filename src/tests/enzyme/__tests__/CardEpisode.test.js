import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import { starWarsEpisodes } from '../../../mock/data';

import CardEpisode from '../../../components/CardEpisode/CardEpisode';

configure({ adapter: new Adapter() });

describe('CardEpisode Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardEpisode card={starWarsEpisodes[0]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Calls closure when card is clicked', () => {
    const onCardClick = sinon.spy();
    const wrapper = shallow(<CardEpisode card={starWarsEpisodes[0]} navigate={onCardClick} />);

    wrapper.find('.CardEpisode').simulate('click');

    expect(onCardClick.calledOnce).toBe(true);
  });
});
