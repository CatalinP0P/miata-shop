import { Schema } from 'mongoose'
import mongoose from '../utils/mongoose.js'

const reviewSchema = new Schema({
  userId: String,
  productSlug: String,
  text: String,
  value: Number,
})

const review = mongoose.model('Review', reviewSchema)
export default review
