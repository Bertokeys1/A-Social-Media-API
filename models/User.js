// refer to NoSQL day 2 for models

// username

// email

// thoughts

// friends

// from NoSQL day3 mini project
const { Schema, model } = require('mongoose');

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
      validate: {
        validator: function(input) {
          return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(input);
        },
        message: "Email not valid",
      },
    },
    thoughts: {
      // need to set up thought.js refer to day 3 subdoc activities
    },
    friends: {
        // need friendCount for self reference? per readme
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;