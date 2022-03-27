const router = require('express').Router();
// get/post/delete routes
const {
    getUsers,
    getSingleUser,
    createUser,
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUser);
  
  // /api/users/:userId
  router.route('/:userId').get(getSingleUser);
  
  module.exports = router;