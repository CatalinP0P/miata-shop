import order from '../schema/orderSchema.js'
import {
  getProductsFromSession,
  getSessionDetails,
} from '../controllers/stripeController.js'

export const getOrderByStripeSession = async (sessionId) => {
  try {
    const x = await order.findOne({ stripe_session: sessionId })
    return x
  } catch {
    return {}
  }
}

export const getOrderFromId = async (id, userId) => {
  try {
    const ord = await order.findById(id)
    if (ord.userId != userId) throw 'No permission for accessing this order'

    return ord
  } catch (err) {
    console.log(err)
    return null
  }
}

export const getOrdersFromUserId = async (userId) => {
  try {
    const orders = await order.find({ userId: userId }).sort({ created_at: -1 })
    return orders
  } catch {
    return []
  }
}

export const processOrder = async (sessionId, userId) => {
  try {
    const products = await getProductsFromSession(sessionId)

    if ((await getOrderByStripeSession(sessionId)) != null) return null

    const {
      customer_details,
      shipping_details,
      amount_total,
      payment_status,
      id,
    } = await getSessionDetails(sessionId)

    if (payment_status != 'paid') return 'Session not completed'

    const newOrder = new order({
      userId,
      products,
      amount: amount_total,
      stripe_session: id,
      customer_details,
      shipping_details,
    })

    await newOrder.save()

    return newOrder
  } catch {
    return 'Already processed'
  }
}
