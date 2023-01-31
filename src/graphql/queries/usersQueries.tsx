import { gql } from '@apollo/client';

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

// export const ONE_USER = gql`
//   query Query($userId: ID!) {
//     user(id: $userId) {
//       email
//       firstname
//       id
//       lastname
//       password
//     }
//   }
// `;

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
