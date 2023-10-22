import express from 'express'
import { createStripeSession } from '../controllers/stripeController.js'
const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
  const cartItems = req.body.cartItems
  var session = await createStripeSession(cartItems)

  res.send({ url: session.url })
})

export default router
