import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { starWarsCharacters } from '../../../mock/data';
import { ApolloProvider } from '@apollo/react-hooks';

import CardChart from '../../../components/CardChart/CardChart';

configure({ adapter: new Adapter() });

describe('CardChart Component', () => {
  it('should match snapshot with Apollo Provider wrapper', () => {
    const wrapper = shallow(
      <ApolloProvider>
        <CardChart starship={starWarsCharacters[0].node.starships[0]} />
      </ApolloProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
