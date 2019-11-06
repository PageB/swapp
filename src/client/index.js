import ApolloClient from 'apollo-boost';
require('dotenv').config();

const client = new ApolloClient({
  uri: process.env.REACT_APP_STAR_WARS_GRAPHQL_ENDPOINT,
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
