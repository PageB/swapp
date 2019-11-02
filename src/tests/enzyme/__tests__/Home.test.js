import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Home from '../../../Home';

configure({ adapter: new Adapter() });

describe('Home Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
