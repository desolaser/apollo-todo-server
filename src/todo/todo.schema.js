import { gql } from "apollo-server"

const todoSchema = gql`
	type Todo {
		task: String
		description: String
	}

    type Query {
		todos: [Todo]
	}

	type Mutation {
		addTodo(task: String!, description: String!): Todo
	}
`

export { todoSchema }