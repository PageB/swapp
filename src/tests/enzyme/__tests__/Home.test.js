import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router-dom';

// The component AND the query need to be exported
import Home from '../../../Home';
import gql from 'graphql-tag.macro';
const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const mocks = [
  {
    request: {
      query: SIGN_IN,
      variables: {
        email: 'martin@mail.com',
        password: 'martin'
      },
    },
    result: {
      data: {
        token: 'adfadfadsgdashahashah'
      },
    },
  },
];

configure({ adapter: new Adapter() });

describe('Home Component', () => {
  it('should match snapshot with Login component', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Home Component', () => {
  it('should match snapshot with Screen component', () => {
    localStorage.setItem('token', '12312423423141241341')
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
    localStorage.removeItem('token')
  });
});

describe('Home Component is rendered', () => {
  it('should remove token in local storage when user logout', () => {
    localStorage.setItem('token', '12312423423141241341')
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </MockedProvider>);

    wrapper.find('a').at(2).simulate('click');

    expect(localStorage.getItem('token')).toBe(null);
  });
});

// TODO: NEEDS TO BE FIXED
// describe('Home Component is rendered', () => {
//   it('should set token in local storage when user login', () => {
//     const preventDefault = jest.fn();
//     const wrapper = mount(
//       <MockedProvider mocks={mocks} removeTypename={true}>
//         <MemoryRouter>
//           <Home />
//         </MemoryRouter>
//       </MockedProvider>);

//     wrapper.find('form').simulate('submit', { preventDefault });

//     expect(localStorage.getItem('token')).toBe('adfadfadsgdashahashah');
//   });
// });

describe('Home Component is rendered', () => {
  it('should change theme when Navigation Icon is clicked', () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </MockedProvider>);

    expect(wrapper.find('.Toolbar').hasClass('Toolbar DarkTheme')).toBe(true);

    wrapper.find('.Toolbar__Logo').simulate('click');

    expect(wrapper.find('.Toolbar').hasClass('Toolbar LightTheme')).toBe(true);

    wrapper.find('.Toolbar__Logo').simulate('click');

    expect(wrapper.find('.Toolbar').hasClass('Toolbar DarkTheme')).toBe(true);
  });
});

