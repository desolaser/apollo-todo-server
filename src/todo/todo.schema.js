import { gql } from "apollo-server"

const todoSchema = gql`
	type Todo {
		id: ID
		task: String
		description: String
		user: User
	}

    extend type Query {
		todo(id: ID!): Todo
		todos: [Todo]
		userTodos(userId: ID!): [Todo]
	}

	extend type Mutation {
		addTodo(task: String!, description: String!, userId: ID!): Todo
		updateTodo(id: ID!, task: String, description: String, userId: ID!): Todo
		deleteTodo(id: ID!, userId: ID!): Todo
	}
`

export { todoSchema }