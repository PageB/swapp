import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Input from '../../common/Input/Input';

configure({ adapter: new Adapter() });

describe('Input Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper).toMatchSnapshot();
  });
});
