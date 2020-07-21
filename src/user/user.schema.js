import { gql } from "apollo-server"

const userSchema = gql`
	type User {
		id: ID
		email: String!
		password: String!
	}

    extend type Query {
		user(id: ID!): User
		currentUser: User!
		users: [User]
	}

	extend type Mutation {
		updateUser(id: ID!, email: String, password: String): User
		deleteUser(id: ID!): User
		register(email: String!, password: String!): User!
		login(email: String!, password: String!): LoginResponse!
	}

	type LoginResponse {
	  token: String
	  user: User
	}
`

export { userSchema }