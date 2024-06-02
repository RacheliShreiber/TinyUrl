import express from 'express'

import UsersController from '../Controllers/UserController.js'

const UsersRouter=express.Router()

UsersRouter.get('/',UsersController.getList)
UsersRouter.get('/:id',UsersController.getById)
UsersRouter.post('/',UsersController.add)
UsersRouter.put('/:id',UsersController.update)
UsersRouter.delete('/',UsersController.delete)

export default UsersRouter