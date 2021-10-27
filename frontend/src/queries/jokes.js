import { gql } from 'graphql-tag';

export const GET_RANDOM_JOKE = gql`
  query randomJoke {
    randomJoke {
      id
      url
      value
      icon_url
    }
  }
`;
