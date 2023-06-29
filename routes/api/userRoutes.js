const router = require('express').Router();

const { get } = require('mongoose');
const {

} = require('../../controllers/userController.js')

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(postUser);

// /api/user/:userId
router 
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteCourse);

// /api/user/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(postNewFriend)
    .delete(deleteFriend)

module.exports = router