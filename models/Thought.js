// thoughttext 

// createdAt

// username

// reactions
const { Schema, model } = require("mongoose");
const reactionSchema =  require('./Reaction');

// schema to define shape of document
const thoughtSchema = new Schema({

    reactions: [ reactionSchema ]
});

const Thought = model('Thought', thoughtSchema);


module.exports = Thought;