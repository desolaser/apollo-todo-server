import { gql } from 'apollo-server'

const typeDefs = gql`
    type Todo {
        task: String
        description: String
    }

    type Query {
        todos: [Todo]
    }
`

export default typeDefs