import express from 'express'
import {
  getOrdersFromUserId,
  processOrder,
} from '../controllers/orderController.js'
import authorization from '../middlewares/authorization.js'

const router = express.Router()

router.post('/process/:session_id', authorization, async (req, res) => {
  const order = await processOrder(req.params.session_id, req.user.uid)
  res.json(order)
})

router.get('/', authorization, async (req, res) => {
  console.log(req.user.uid)
  const orders = await getOrdersFromUserId(req.user.uid)
  res.json(orders)
})

export default router
