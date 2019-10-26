import gql from 'graphql-tag.macro';

export const ALL_CHARACTERS = gql`
  query {
    allPeople(first: 40) {
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
  query {
    person(id: "people.11") {
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
