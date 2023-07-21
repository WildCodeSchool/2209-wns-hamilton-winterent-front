import { gql } from '@apollo/client';

export const LIST_SHOP = gql`
  query Shop($city: String!) {
    listShop(city: $city) {
      id
      name
      address {
        id
        roadNumber
        streetName
        city
        postalCode
        country
      }
    }
  }
`;

export const SHOPS = gql`
  query Shops {
    shops {
      name
      id
    }
  }
`;
