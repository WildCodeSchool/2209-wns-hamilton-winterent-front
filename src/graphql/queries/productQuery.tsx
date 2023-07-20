import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query Product($idShop: UUID, $idCategory: UUID) {
    productsFilter(idShop: $idShop, idCategory: $idCategory) {
      id
      name
      description
      range
      image
      category {
        category
      }
    }
  }
`;

export const LIST_PRODUCT = gql`
  query Products {
    products {
      description
      id
      image
      name
      range
    }
  }
`;

export const GET_PRODUCT_INFOS = gql`
  query getProductInfos($idShop: UUID, $idProduct: UUID) {
    productInfos(idShop: $idShop, idProduct: $idProduct) {
      productId
      quantity
      price
    }
  }
`;

export const GET_FILTER_ADMIN = gql`
  query ProductsAdmin($idCategory: UUID, $idShop: UUID) {
    productsAdmin(idCategory: $idCategory, idShop: $idShop) {
      id
      quantity
      priceHT
      name
      description
      range
      image
      category {
        category
      }
    }
  }
`;
