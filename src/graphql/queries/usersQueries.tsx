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

export const LOGIN = gql`
  query Login($user: LoginUser!) {
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

export const USER = gql`
  query User($userId: UUID!) {
    user(id: $userId) {
      id
      email
      firstname
      lastname
      gender
      birthdate
      phoneNumber
      role {
        id
        role
      }
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

export const USER_ORDERS = gql`
  query Orders($userId: UUID) {
    getOrderByUserId(userId: $userId) {
      id
      date
      status
      bookings {
        id
        startDate
        endDate
        price
      }
    }
  }
`;

export const CHECK_USER_IS_ADMIN = gql`
  query Query {
    checkUserIsAdmin
  }
`;

export const CHECK_USER_CONNECT = gql`
  query Connect {
    checkUser
  }
`;
