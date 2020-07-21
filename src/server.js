import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

import resolvers from './resolvers'
import schemas from './schema'

// Load environment variables
dotenv.config({ path: ".env" })

const getUser = token => {
	try {
		if (token) {
			return jwt.verify(token, process.env.SECRET_ENV)
		}
		return null
	} catch (err) {
	  	return null
	}
  }


// Set mongodb connection with debug mode
mongoose.set("debug", true);
mongoose.connect(process.env.MONGO_DB_URI)
mongoose.connection.once('open', () => console.log('Connected to database'))

const server = new ApolloServer({    
	typeDefs: schemas,
	resolvers,
	context: ({ req }) => {
		const tokenWithBearer = req.headers.authorization || ''
		const token = tokenWithBearer.split(' ')[1]
		const user = getUser(token)

		return {
			user
		}
	}
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})