import { todoSchema } from "./todo"
import { userSchema } from "./user"
import { gql } from "apollo-server"

const schemas = gql`
    type Query{
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${todoSchema}
    ${userSchema}
`;

export default schemas;