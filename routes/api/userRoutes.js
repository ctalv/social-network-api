const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    addNewFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require('../../controllers/userController.js')

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/user/:userId
router 
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/user/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteFriend)

module.exports = router;