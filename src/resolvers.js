import Todo from './todo/todo.model'

const resolvers = {
    Query: {
        todos: () => Todo.find({})
    }
}

export default resolvers