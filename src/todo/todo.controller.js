import Todo from './todo.model'
import { NoFragmentCyclesRule } from 'graphql'

const todoController = {
    getUsers: () => Todo.find({}),
    addUser: ({ task, description }) => {        
        const todo = new Todo({ task, description })
        todo.save()
        return todo
    },
    updateUser: ({ id, task, description }) => {
        const todo = Todo.findById(id, function (err, todo) {
            todo.task = task
            todo.description = description
            todo.save();
            return todo
        });
        return todo
    }
}

export default todoController