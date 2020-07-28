# Apollo todo server

GraphQL API made with Apollo server and JWT for authentication tokens and mongoose for models,
this API gets the data from a mongoDB server.

# How to run

1. Create a mongoDB server [Mongo DB Cloud](https://www.mongodb.com/cloud). You can follow this [guide](https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369) to get the server on.
2. Add the mongoDB uri to the .env as `MONGO_DB_URI`
3. Add a private key in .env as `SECRET_ENV`
4. In root folder `nodemon src/server.js`
5. You can test the API in `https://localhost:4000`
