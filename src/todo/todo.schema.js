import { gql } from "apollo-server"

const todoSchema = gql`
	type Todo {
		id: ID
		task: String
		description: String
	}

    extend type Query {
		todo(id: ID!): Todo
		todos: [Todo]
	}

	extend type Mutation {
		addTodo(task: String!, description: String!): Todo
		updateTodo(id: ID!, task: String, description: String): Todo
		deleteTodo(id: ID!): Todo
	}
`

export { todoSchema }