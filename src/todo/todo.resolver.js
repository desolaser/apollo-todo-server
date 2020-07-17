import Todo from './todo.model'

const todoResolver = {
    Query: {
        todos: () => Todo.find({})
    }
}

export { todoResolver } 