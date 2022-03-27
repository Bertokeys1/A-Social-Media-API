const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// user is base route to chain with friends route.
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;