const router = require('express').Router();
// get/post/delete routes
const {
    getUsers,
    getSingleUser,
    createUser,
    getFriends,
    getSingleFriend,
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUser);
  
  // /api/users/:userId
  router.route('/:userId').get(getSingleUser);

  // get all friends
  router.route('/friends').get(getFriends);

  // get a single friend
  router.route('/friends/:userId').get(getSingleFriend);
  
  module.exports = router;