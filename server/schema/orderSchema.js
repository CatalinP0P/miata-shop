import { Schema } from 'mongoose'
import mongoose from '../utils/mongoose.js'

const orderSchema = new Schema({
  email: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product model
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const review = mongoose.model('Order', orderSchema)
export default review
