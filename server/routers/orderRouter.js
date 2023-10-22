import express from 'express'
import { processOrder } from '../controllers/orderController.js'

const router = express.Router()

router.post('/process/:session_id', async (req, res) => {
  const order = await processOrder(req.params.session_id)
  res.json(order)
})

export default router
