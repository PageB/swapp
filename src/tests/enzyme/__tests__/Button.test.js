import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Button from '../../../components/Button/Button';

configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Button>Login</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
