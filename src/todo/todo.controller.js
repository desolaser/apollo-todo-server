import Todo from './todo.model'

const todoController = {
    getUsers: () => Todo.find({}),
    getUser: async ({ id }) => {
        const todo = await Todo.findById(id);
        return todo
    },
    addUser: ({ task, description }) => {        
        const todo = new Todo({ task, description })
        todo.save()
        return todo
    },
    updateUser: async ({ id, task, description }) => {
        const todo = await Todo.findById(id)
        todo.task = task
        todo.description = description
        todo.save();
        return todo
    },
    deleteUser: async ({ id }) => {
        const todo = await Todo.findByIdAndRemove(id)
        return todo
    }
}

export default todoController