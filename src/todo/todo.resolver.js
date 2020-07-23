import todoController from './todo.controller'
import User from '../user/user.model'

const todoResolver = {
    Query: {
        todos: (parent, args, context) => todoController.getTodos(context),
        todo: (parent, args, context) => todoController.getTodo(args, context),
        userTodos: (parent, args, context) => todoController.getUserTodos(args, context),
    },
    Mutation: {
        addTodo: (parent, args, context) => todoController.addTodo(args, context),
        updateTodo: (parent, args, context) => todoController.updateTodo(args, context),
        deleteTodo: (parent, args, context) => todoController.deleteTodo(args, context)
    },
    Todo: {
        user: parent => {
            const user = User.findById(parent.userId)
            return user
        }
    }
}

export { todoResolver } 