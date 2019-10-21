import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CardRowData from '../../CardRowData/CardRowData';

configure({ adapter: new Adapter() });

describe('CardRowData Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardRowData label="Firstname: ">Martin</CardRowData>);

    expect(wrapper).toMatchSnapshot();
  });
});
