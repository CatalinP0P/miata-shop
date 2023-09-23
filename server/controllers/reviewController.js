import { ObjectId } from 'mongodb';
import review from '../schema/reviewSchema.js';

const getReviews = async (productSlug) => {
  const data = await review.find({
    productSlug: productSlug,
  });

  return data;
};

const getByID = async (id) => {
  const targetReview = await review.findById(id);
  return targetReview;
};

const addReview = async (productSlug, userId, text, value) => {
  const newReview = new review({
    productSlug,
    userId,
    text,
    value,
  });

  await newReview.save();
  console.log('Review added');
};

const removeReview = async (id) => {
  await review.deleteOne({ _id: id });
};

const reviewController = {
  getReviews,
  addReview,
  removeReview,
  getByID,
};

export default reviewController;
