import { gql } from 'apollo-boost';

export const GET_INGREDIENTS = gql`
query {
    allIngredients {
      edges {
        node {
          name
        }
      }
    }
  }
`;
