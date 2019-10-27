import gql from 'graphql-tag.macro';

export const ALL_EPISODES = gql`
  query {
    allEpisodes(first: 20) {
      edges {
        node {
          id
          title
          episodeId
          openingCrawl
          image
        }
      }
    }
  }
`;
export const EPISODE = gql`
  query getEpisode($id: ID!, $first: Int, $after: String) {
    episode(id: $id) {
      id
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people(first: $first, after: $after) {
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
  }
`;
