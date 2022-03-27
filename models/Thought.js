// thoughttext 

// createdAt

// username

// reactions
const { Schema, model } = require("mongoose");
const reactionSchema =  require('./Reaction');
const User = require("./User");

// schema to define shape of document
const thoughtSchema = new Schema({
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
            minLength: 1,
        },
        createdAt: {
            type: Date,
            default: {timestamps: true},
        },
        username: {
            type: String,
            required: true,
            ref: User,
            validate: {
                validator: function (username) {
                    return User.exists({ username });
                },
                message: "Could not find username.",
            },
        },
    reactions: [ reactionSchema ],
    toJSON: {
        virtuals: true,
    },
});

reactions.virtual('reactionCount').get(function(){
    return this.reactionSchema.length;
});

const Thought = model('Thought', thoughtSchema);


module.exports = Thought;