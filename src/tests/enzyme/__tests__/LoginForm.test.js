import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

import LoginForm from '../../../components/LoginForm/LoginForm';
import { setTimeout } from 'timers';

configure({ adapter: new Adapter() });

describe('LoginForm Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoginForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call login when form is submited', () => {
    const preventDefault = jest.fn();
    const login = jest.fn();
    const wrapper = mount(<LoginForm login={login} />);

    wrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledTimes(1);
  });

  it('should change input value on change event', () => {
    const wrapper = mount(<LoginForm />);

    wrapper
      .find('input')
      .first()
      .simulate('focus');
    wrapper
      .find('input')
      .first()
      .simulate('change', { target: { value: 'First line', name: 'email' } });

    expect(
      wrapper
        .find('input')
        .first()
        .instance().value,
    ).toBe('First line');
  });

  it('should show error message', () => {
    const wrapper = mount(<LoginForm error={'Incorrect email or password.'} />);

    expect(wrapper.find('.ErrorMessage').text()).toBe('Incorrect email or password.');
  });
});
