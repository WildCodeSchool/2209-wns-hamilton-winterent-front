import { gql } from '@apollo/client';

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