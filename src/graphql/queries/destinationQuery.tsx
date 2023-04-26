import { gql } from '@apollo/client';

export const LIST_ADDRESS_SHOP = gql`
  query Destination {
    shops {
      address {
        city
        id
      }
    }
  }
`;
