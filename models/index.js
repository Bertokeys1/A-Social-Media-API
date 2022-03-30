const router = require('express').Router();
const User = require('./User');
const Thought = require('./Thought');
const reactionSchema = require('./Reaction');

module.exports = { User, Thought, reactionSchema };