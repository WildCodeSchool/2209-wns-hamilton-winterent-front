import { gql } from '@apollo/client';

export const SEARCHBAR = gql`
  query Search($idCategory: UUID, $idShop: UUID) {
    productsFilter(idCategory: $idCategory, idShop: $idShop) {
      id
      name
      description
      range
      image
    }
  }
`;
