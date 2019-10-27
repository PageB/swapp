import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Loading from '../../../components/Loading/Loading';

configure({ adapter: new Adapter() });

describe('Loading Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
