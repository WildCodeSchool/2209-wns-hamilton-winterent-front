import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($user: CreateUser!) {
    addUser(user: $user) {
      user {
        id
        firstname
        email
      }
      token
    }
  }
`;
