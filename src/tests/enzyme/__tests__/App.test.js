import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App from '../../../App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('App Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call login when form is submited', () => {
    document.body.classList.add = jest.fn();
    mount(<App />);

    expect(document.body.classList.add).toHaveBeenCalledTimes(1);
  });
});
