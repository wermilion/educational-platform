import {gql} from "graphql-tag";

export const GET_COURSE = gql`
    query getCourse($id: ID!) {
        course(id: $id) {
            id
            name
            description
            image
            lessons {
                id
                name
                description
                content
                file_url
                characteristics {
                    id
                    name
                    value
                }
            }
        }
    }
`