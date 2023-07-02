const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    addNewFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require('../../controllers/userController')

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router 
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteFriend)

module.exports = router;