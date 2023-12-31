import express from 'express'
import reviewController from '../controllers/reviewController.js'
import authorization from '../middlewares/authorization.js'
import userController from '../controllers/userController.js'

const router = express.Router()

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const reviews = await reviewController.getReviews(id)
    for (let i = 0; i < reviews.length; i++) {
      try {
        const posterUser = await userController.getUserDetails(
          reviews[i].userId,
        )
        reviews[i] = { ...reviews[i]._doc, user: posterUser.providerData[0] }
      } catch (err) {
        console.log(err)
      }
    }
    res.json(reviews)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/', authorization, async (req, res) => {
  const { text, value, productSlug } = req.body

  if (!text || !value || !productSlug)
    return res.status(400).json('All fields are required')

  try {
    await reviewController.addReview(productSlug, req.user.uid, text, value)
    res.sendStatus(201)
  } catch (err) {
    res.sendStats(400)
  }
})

router.delete('/:id', authorization, async (req, res) => {
  const { id } = req.params
  try {
    const review = await reviewController.getByID(id)
    if (review.userId !== req.user.uid)
      return res.status(403).json('Unauthorized')
  } catch (err) {
    return res.status(204).json('Object not found')
  }

  try {
    await reviewController.removeReview(id)
    res.sendStatus(202)
  } catch (err) {
    res.status(400).json(err)
  }
})

export default router
