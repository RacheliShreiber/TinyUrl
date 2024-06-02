import express from 'express'
import cors from 'cors'

import connectDB from './database.js'
import LinksRouter from './Routers/LinkRouter.js'
import UsersRouter from './Routers/UserRouter.js'
import LinkModel from './Models/LinkModel.js'

connectDB()
const app = express()
const port = 3000
//sprint 2-Tracking
app.get('/track/:id', async (req, res) => {
    try {
        const link = await LinkModel.findById(req.params.id)
        if (!link) {
            return res.status(404).json({ message: 'Link not found' })
        }
        const targetParamName = link.targetParamName;
        const targetParamValue = req.query[targetParamName] || ""
        const ipAddress = req.ip
        const newClick = {
            ipAddress: ipAddress,
            targetParamValue: targetParamValue
        }
        link.clicks.push(newClick)
        await link.save()
        res.redirect(link.originalUrl)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//sprint 3-Targeting
app.get('/target/:id', async (req, res) => {
    try {
        const link = await LinkModel.findById(req.params.id);
        if (!link) {
            return res.status(404).json({ message: 'Link not found' });
        }
        const clicksBySource = {};
        link.targetValues.forEach(target => {
            const sourceName = target.name;
            clicksBySource[sourceName] = link.clicks.filter(click => click.targetParamValue === target.value);
        })
        res.json(clicksBySource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.use(cors())

app.use('/links', LinksRouter)
app.use('/users', UsersRouter)

app.listen(port, () => {
    console.log(`port: http://localhost:${port}`)
})
