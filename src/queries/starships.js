import gql from 'graphql-tag.macro';

export const ALL_STARSHIPS = gql`
  query {
    allStarships(first: 100) {
      edges {
        node {
          id
          name
          model
          image
          starshipClass
          cost
          maxAtmosphericSpeed
          maxMLPerHour
          hyperdriveRating
          crew
        }
      }
    }
  }
`;
export const STARSHIP = gql`
  query getStarship($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      maxMLPerHour
      hyperdriveRating
      crew
    }
  }
`;
