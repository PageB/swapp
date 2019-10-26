import gql from 'graphql-tag.macro';

export const STARSHIP = gql`
  query {
    starship(id: "starships.39") {
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
