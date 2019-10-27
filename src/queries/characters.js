import gql from 'graphql-tag.macro';

export const ALL_CHARACTERS = gql`
  query getPeople($after: String) {
    allPeople(first: 12, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;
export const CHARACTER = gql`
  query getCharacter($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      height
      mass
      image
      homeworld {
        name
      }
      species {
        name
      }
      starships {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;
