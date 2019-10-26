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
  query {
    episode(id: "films.1") {
      id
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people {
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
