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
`

export const ONE_USER = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      email
      firstname
      id
      lastname
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation(
    $email: String!
    $firstname: String!
    $password: String!
    $lastname: String
  ) {
    addUser(
      email: $email
      firstname: $firstname
      password: $password
      lastname: $lastname
    ) {
      token
      user {
        email
        id
      }
    }
  }
`;

export const LOGIN = gql`
  query Query($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        email
        firstname
        id
      }
    }
  }
`;