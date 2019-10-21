import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LoginForm from '../../LoginForm/LoginForm';

configure({ adapter: new Adapter() });

describe('LoginForm Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoginForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
