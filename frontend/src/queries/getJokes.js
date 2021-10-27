import { gql } from 'graphql-tag';

export const GET_JOKES = gql`
  query getJokes {
    getJokes {
      id
      url
      value
      icon_url
      categories
    }
  }
`;
