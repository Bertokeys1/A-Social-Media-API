const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // update user by id
  updateUser(req, res) {
    User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { runValidators: true, new: true }
    )
    .then((course) =>
        !course
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(course)
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
},
  // Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.Thoughts } })
      )
      .then(() => res.json({ message: 'User and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  createFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId },
      {$addToSet: { friends: req.params.friendId}},
      {new: true}
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No friend with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId },
      {$pull: { friends: req.params.friendId}},
      {new: true}
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No friend with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};