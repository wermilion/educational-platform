import { gql } from '@apollo/client/core';

export const GET_REWARDS = gql`
    query getReward($id: ID!) {
        reward(id: $id) {
            id
            name
            description
            image
            type
        }
    }
`;