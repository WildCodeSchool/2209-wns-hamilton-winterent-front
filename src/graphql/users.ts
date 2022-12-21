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