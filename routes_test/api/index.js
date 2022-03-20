const router = require('express').Router();
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');

// user is base route to chain with friends route.
router.use('/users', userRoutes, friendRoutes);
router.use('/friends', );

module.exports = router;