import { gql } from '@apollo/client';

export const LIST_SHOP = gql`
  query Query($city: String!) {
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
