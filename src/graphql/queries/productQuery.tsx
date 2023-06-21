import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query Product($idShop: UUID, $idCategory: UUID) {
    productsFilter(idShop: $idShop, idCategory: $idCategory) {
      id
      name
      description
      range
      image
    }
  }
`;

export const GET_PRODUCT_INFOS = gql`
  query Query($idShop: UUID, $idProduct: UUID) {
    productInfos(idShop: $idShop, idProduct: $idProduct) {
      productId
      quantity
      price
    }
  }
`;
