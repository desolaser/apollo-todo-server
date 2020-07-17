import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import resolvers from './resolvers'
import typeDefs from './schema'

// Load environment variables
dotenv.config({ path: ".env" });

// Set mongodb connection with debug mode
mongoose.set("debug", true);
mongoose.connect(process.env.MONGO_DB_URI)
mongoose.connection.once('open', () => console.log('Connected to database'))

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})