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
  query {
    starship(id: "starships.13") {
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
