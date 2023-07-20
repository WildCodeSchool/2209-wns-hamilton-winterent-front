import { gql } from '@apollo/client';

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

export const UPDATE_USER = gql`
  mutation UpdateUser($user: UpdateUserInput!) {
    updateUser(user: $user) {
      id
      firstname
      lastname
      gender
      birthdate
      phoneNumber
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
