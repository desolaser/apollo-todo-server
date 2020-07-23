import Todo from './todo.model'
import { AuthenticationError } from 'apollo-server';

const todoController = {
    getTodos: ({ user }) => {
        if(!user)
            throw new AuthenticationError('You must log in')

        return Todo.find({})
    },
    getTodo: async ({ id }, { user }) => {
        if(!user)
            throw new AuthenticationError('You must log in')

        const todo = await Todo.findById(id);
        return todo
    },
    getUserTodos: ({ userId }, { user }) => {
        if(!user)
            throw new AuthenticationError('You must log in')

        return Todo.find({ userId: userId })
    },
    addTodo: ({ task, description, userId }, { user }) => {
        if(!user)
            throw new AuthenticationError('You must log in') 

        const todo = new Todo({ task, description, userId })
        todo.save()
        return todo
    },
    updateTodo: async ({ id, task, description, userId }, { user }) => {
        if(!user)
            throw new AuthenticationError('You must log in')

        if(userId !== user.id)
            throw new AuthenticationError('You can not update this task if you are not the owner')

        const todo = await Todo.findById(id)

        if(task) 
            todo.task = task
        if(description) 
            todo.description = description

        todo.save();
        return todo
    },
    deleteTodo: async ({ id, userId }, { user }) => {
        if(!user)
            throw new AuthenticationError('You must log in')

        if(userId !== user.id)
            throw new AuthenticationError('You can not delete this task if you are not the owner')

        const todo = await Todo.findByIdAndRemove(id)
        return todo
    }
}

export default todoController