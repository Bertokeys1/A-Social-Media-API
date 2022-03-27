const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        "must be in email format",
      ],
    },
    thoughts: [{
      // need to set up thought.js refer to day 3 subdoc activities
      type: Schema.Types.ObjectId,
      ref: "Thought",
    }],
    friends: [{
      // need friendCount for self reference, subdoc
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
  },
  {
    toJSON: {
        virtuals: true,
      },
    id: false,
  }
);

//virtual Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


const User = model("User", userSchema);

module.exports = User;
