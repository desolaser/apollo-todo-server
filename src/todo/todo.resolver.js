import todoController from './todo.controller'

const todoResolver = {
    Query: {
        todos: (parent, args, context) => todoController.getTodos(context),
        todo: (parent, args, context) => todoController.getTodo(args, context),
    },
    Mutation: {
        addTodo: (parent, args, context) => todoController.addTodo(args, context),
        updateTodo: (parent, args, context) => todoController.updateTodo(args, context),
        deleteTodo: (parent, args, context) => todoController.deleteTodo(args, context)
    }
}

export { todoResolver } 