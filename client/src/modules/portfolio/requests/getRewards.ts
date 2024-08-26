import { gql } from '@apollo/client/core';

export const GET_REWARDS = gql`
    query getRewards($type: String!) {
        rewards(type: $type) {
            id
            name
            description
            image
            type
        }
    }
`;