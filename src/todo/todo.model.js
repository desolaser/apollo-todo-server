import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    task: String,
    description: String
})

export default mongoose.model("todos", todoSchema);
