import { gql } from '@apollo/client';

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