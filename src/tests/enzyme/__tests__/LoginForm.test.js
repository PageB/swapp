import React from 'react';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LoginForm from '../../../components/LoginForm/LoginForm';

configure({ adapter: new Adapter() });

describe('LoginForm Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoginForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('When change event is triggered email input value is updated.', () => {
    const wrapper = shallow(<LoginForm/>);

    wrapper.find('input').at(0).simulate('change', { target: { value: 'martin@mail.com', name: 'email' } });

    expect(wrapper.find('input').at(0).props().value).toBe('martin@mail.com');
  });

  it('When change event is triggered for password input value is updated.', () => {
    const wrapper = shallow(<LoginForm/>);

    wrapper.find('input').at(1).simulate('change', { target: { value: '123456', name: 'password' } });

    expect(wrapper.find('input').at(1).props().value).toBe('123456');
  });

  // it('When change event is triggered value is updated.', () => {
  //   const preventDefault = sinon.spy();
  //   const wrapper = shallow(<LoginForm/>);

  //   wrapper.find('Button').simulate('submit', {
  //     preventDefault,
  //     test: "aaa"
  //    });

  //   expect(preventDefault.calledOnce).toBe(true);
  // });
});
