import { gql } from "@apollo/client";

export const LIST_USERS = gql`
  query Users {
    users {
      id
      email
      firstname
      lastname
    }
  }
`;

export const LOGIN = gql`
  query Query($user: LoginUser!) {
    login(user: $user) {
      user {
        id
        firstname
        email
      }
      token
    }
  }
`;
