import express from 'express'

import LinksController from '../Controllers/LinkController.js'

const LinksRouter=express.Router()

LinksRouter.get('/',LinksController.getList)
LinksRouter.get('/:id',LinksController.getById)
LinksRouter.post('/',LinksController.add)
LinksRouter.put('/:id',LinksController.update)
LinksRouter.delete('/',LinksController.delete)

export default LinksRouter