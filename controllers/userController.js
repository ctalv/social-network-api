const { User, Thought } = require('../models');

module.exports = {
    // get all the users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).send(users)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single user 
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(200).send(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(200).send(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update a single user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
            }

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a single user and associated thoughs
    async deleteUser(req, res) {
        try {
          const user = await User.findOneAndDelete({ _id: req.params.userId });
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          await Thought.deleteMany({ _id: { $in: user.thoughts } });
          res.json({ message: 'User and associated thoughts deleted!' })
        } catch (err) {
          res.status(500).json(err);
        }
      },


    // add a new friend to user friend list
      async addNewFriend(req, res) {
        console.log('You are adding a new friend!');
        console.log(req.body)

        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.studentId },
                { $addToSet: { friends: req.body }},
                { runValidators: true, new: true }
            );

            if (user) {
                return res.status(404).json({ message: 'No user found with that ID.'});
            }

            res.json(200).send(user);

        } catch (err) {
            res.status(500).json(err)
        }
      },
    // delete a single friend from a single friend list
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.studentId },
                { $pull: { friend: { friendId: req.params.friendId }}},
                { runValidators: true, new: true }
            );

            if (user) {
                return res.status(404).json({ message: 'No user found with that ID.'});
            };

            res.json(200).send(user);

        } catch (err) {
            res.status(500).json(err);
        }
    }
};