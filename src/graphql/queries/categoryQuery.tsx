import { gql } from '@apollo/client';

export const LIST_CATEGORY = gql`
  query Category {
    listCategory {
      id
      category
    }
  }
`;
