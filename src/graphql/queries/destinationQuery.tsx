import { gql } from '@apollo/client';

export const LIST_ADDRESS_SHOP = gql`
  query Shops {
    shops {
      address {
        city
        id
      }
    }
  }
`;
