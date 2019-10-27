import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LoadingError from '../../../components/LoadingError/LoadingError';

configure({ adapter: new Adapter() });

describe('LoadingError Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoadingError />);

    expect(wrapper).toMatchSnapshot();
  });
});
