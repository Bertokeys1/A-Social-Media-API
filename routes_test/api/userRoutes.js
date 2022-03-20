const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req,res) => {
    // from day 2 activity 11 models/index.js
    try {
        const userData = await User.find({});

        res.json( userData );
    } catch(err) {
        res.status(500).json()
    }
});

router.get('/:userId', async (req,res) => {
    try {
        const userData = await User.findById(req.params.userId);

        res.json( userData );
    } catch(err) {
        res.status(500).json()
    }
})