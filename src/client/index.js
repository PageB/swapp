import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';

import authLink from './auth';

const httpLink = createHttpLink({
  uri: 'https://swapp.st6.io/graphql',
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: split(({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  }, authLink.concat(httpLink)),
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});

export default client;
