const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createNewThought,
    createReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughtController.js')

router.route('/')
    .get(getAllThoughts)

router.route('/:thoughtId')
    .get(getSingleThought)
    .post(createNewThought)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports = router;