import express from 'express';
import reviewController from '../controllers/reviewController.js';
import authorization from '../middlewares/authorization.js';

const router = express.Router();

router.get('/:id', authorization, async (req, res) => {
  const id = req.params.id;
  try {
    const reviews = await reviewController.getReviews(id);
    res.json(reviews);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  const { text, value, productSlug, userId } = req.body;
  try {
    await reviewController.addReview(productSlug, userId, text, value);
    res.sendStatus(201);
  } catch (err) {
    res.sendStats(400);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await reviewController.removeReview(id);
    res.sendStatus(202);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
