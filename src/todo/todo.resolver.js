import todoController from './todo.controller'

const todoResolver = {
    Query: {
        todos: () => todoController.getUsers(),
        todo: (parent, args) => todoController.getUser(args),
    },
    Mutation: {
        addTodo: (parent, args) => todoController.addUser(args),
        updateTodo: (parent, args) => todoController.updateUser(args),
        deleteTodo: (parent, args) => todoController.deleteUser(args)
    }
}

export { todoResolver } 