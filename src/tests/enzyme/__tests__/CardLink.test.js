import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import { starWarsCharacters } from '../../../mock/data';

import CardLink from '../../../components/CardLink/CardLink';

configure({ adapter: new Adapter() });

describe('CardLink Component', () => {
  it('should match snapshot', () => {
    console.log('============here============');
    console.log(starWarsCharacters[0].node.starships[0]);
    console.log('============here============');
    const wrapper = shallow(<CardLink card={starWarsCharacters[0].node.starships[0]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Calls closure when card is clicked', () => {
    const onCardClick = sinon.spy();
    const wrapper = shallow(
      <CardLink card={starWarsCharacters[0].node.starships[0]} navigate={onCardClick} />,
    );

    wrapper.find('.Card').simulate('click');

    expect(onCardClick.calledOnce).toBe(true);
  });
});
