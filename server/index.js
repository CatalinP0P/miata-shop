import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

import reviewRouter from './routers/reviewRouter.js'
app.use('/reviews', reviewRouter)

import stripeRouter from './routers/stripeRouter.js'
app.use('/stripe', stripeRouter)

import orderRouter from './routers/orderRouter.js'
app.use('/order', orderRouter)

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
