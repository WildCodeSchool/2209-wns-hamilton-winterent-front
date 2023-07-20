import { gql } from "@apollo/client";

export const ADD_ORDER = gql`
  mutation AddOrder($orderInfos: OrderInput!) {
    addOrder(orderInfos: $orderInfos) {
      id
      date
      status
    }
  }
`;
