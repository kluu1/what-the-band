import { gql } from 'graphql-tag';

export const GET_RANDOM_JOKE = gql`
  query randomJoke($category: String) {
    randomJoke(category: $category) {
      id
      url
      value
      icon_url
    }
  }
`;
