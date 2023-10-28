import { Schema } from 'mongoose'
import mongoose from '../utils/mongoose.js'

const orderSchema = new Schema({
  userId: String,
  customer_details: {
    address: {
      city: String,
      country: String,
      line1: String,
      line2: String,
      postal_code: String,
      state: String,
    },
    email: String,
    name: String,
    phone: String,
  },
  shipping_details: {
    address: {
      city: String,
      country: String,
      line1: String,
      line2: String,
      postal_code: String,
      state: String,
    },
    name: String,
  },
  amount: Number,
  products: [
    {
      slug: String,
      quantity: Number,
    },
  ],
  stripe_session: String,
  created_at: { type: Date, required: true, default: Date.now },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending',
  },
})

const order = mongoose.model('Order', orderSchema)
export default order
