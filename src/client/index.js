import ApolloClient from 'apollo-boost';
require('dotenv').config();

const client = new ApolloClient({
  uri: 'https://swapp.st6.io/graphql',
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

export default client;
