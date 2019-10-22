import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('CardLink Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
