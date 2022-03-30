const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  getReactions,
  getSingleReaction,
  createReaction,
  updateReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:ThoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").get(getReactions).post(createReaction);
router
  .route("/:thoughtId/reactions/:reactionId")
  .get(getSingleReaction)
  .put(updateReaction)
  .delete();

module.exports = router;
