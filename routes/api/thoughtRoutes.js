const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:ThoughtId/tags
router.route('/:ThoughtId').post(addTag);

// /api/thoughts/:ThoughtId/tags/:tagId
router.route('/:ThoughtId').delete(removeTag);

module.exports = router;