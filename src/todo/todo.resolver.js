import todoController from './todo.controller'

const todoResolver = {
    Query: {
        todos: () => todoController.getUsers()
    },
    Mutation: {
        addTodo: (parent, args) => {
            return todoController.addUser(args)
        }
    }
}

export { todoResolver } 