const Todo = require('../models/Todo')

const createTodo = async (req, res) => {
    const { title, tags } = req.body
    if (!title)
        return res.status(400).send(`title is required`)
    const todo = await Todo.create({ title, tags })
    res.json(todo)
}

const getAllTodos = async (req, res) => {
    const todos = await Todo.find().lean()
    // if (!todos[0])
    //     return res.status(400).send(`there are no todos:(`)
    res.json(todos)
}

const getTodoById = async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id).lean()
    if (!todo)
        return res.status(400).send(`there is no todo with id ${id}`)
    res.json(todo)
}

const updateTodo = async (req, res) => {
    const { _id, title, tags, complete } = req.body
    if (!_id || !title)
        return res.status(400).send(`missing required fields`)
    const todo = await Todo.findById(_id).exec()
    if (!todo)
        return res.status(400).send(`there is no todo with id ${id}`)
    todo.title = title
    todo.tags = tags
    todo.complete = complete
    await todo.save()
    res.send(`todo ${title} updated`)
}

const deleteTodo = async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id).exec()
    if (!todo)
        return res.status(400).send(`there is no todo with id ${id}`)
    await todo.deleteOne()
    res.send(`todo ${todo.title} deleted`)
}

module.exports = { deleteTodo, updateTodo, getTodoById, getAllTodos, createTodo }

