const todoController = require('../controllers/todoController')
const express = require('express')
const router = express.Router()

router.post('/', todoController.createTodo)
router.get('/', todoController.getAllTodos)
router.get('/:id', todoController.getTodoById)
router.put('/', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)

module.exports = router