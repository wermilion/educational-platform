import {gql} from "graphql-tag";

export const GET_LESSON = gql`
    query getLesson($id: ID!) {
        lesson(id: $id) {
            name
            content
            file_url
            characteristics {
                name
                value
            }
            course {
                image
            }
        }
    }
`