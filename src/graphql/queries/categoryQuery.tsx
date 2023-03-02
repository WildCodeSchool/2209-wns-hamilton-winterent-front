import { gql } from "@apollo/client";

export const LIST_CATEGORY = gql`
  query Query {
    listCategory {
      id
      category
    }
  }
`;