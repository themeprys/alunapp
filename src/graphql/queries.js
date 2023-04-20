import gql from 'graphql-tag'

export const allMoodsQuery = gql`
    query allMoodsQuery {
        mood() {
            id
            title
        }  
    }
`