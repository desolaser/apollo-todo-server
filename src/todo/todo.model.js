import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    task: String,
    description: String,
    userId: String
})

const Todo = mongoose.model("todos", todoSchema)
export default Todo
