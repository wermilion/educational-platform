import {gql} from "graphql-tag";

export const GET_COURSES = gql`
    query getCourses {
        courses {
            id
            name
            description
            image
        }
    }
`