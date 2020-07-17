import Todo from './todo.model'

const todoController = {
    getUsers: () => Todo.find({}),
    addUser: ({ task, description }) => {        
        const todo = new Todo({ task, description })
        todo.save()
        return todo
    }
}

export default todoController