import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NavigationToolbar from '../../common/NavigationToolbar/NavigationToolbar';

configure({ adapter: new Adapter() });

describe('NavigationToolbar Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NavigationToolbar />);

    expect(wrapper).toMatchSnapshot();
  });
});
