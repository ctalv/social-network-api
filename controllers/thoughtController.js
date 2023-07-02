const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).send(thoughts)
        } catch (err) {
            res.status(500).json(err); hs
        }
    },
    // get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new thought (for a particular user)
    async createNewThought(req, res) {
            console.log('You are adding a new thought!');
            console.log(-2, req.body)
    
            const thought = await Thought.create(req.body); 

            try {

                console.log(-1, thought)
                console.log(0, thought._id.toString())
                // console.log(1, req.body.userId)
                // console.log(2, thought.userId.toString())
                console.log(6, req.body.thoughtText)

                const user = await User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id.toString() }},
                    { runValidators: true, new: true }
                );
                    console.log(7, req.body.userId)
                    console.log(8, thought._id.toString())
                console.log(3, user)
    
                if (!user) {
                    // If no user found, delete the newly created thought
                    await Thought.deleteOne({ _id: thought._id });
                    return res.status(404).json({ message: 'No user found with that ID.' });
                  }
    
                res.status(200).json(thought);
    
            } catch (err) {
                res.status(500).json(err)
            }
      },

    // create a new reation
    async createReaction(req, res) {
            console.log('You are adding a new reaction!');
            console.log(req.body.reaction)
    
            console.log(req.params.thoughtId)
            try {
                const thought = await Thought.findOneAndUpdate(
                    { _id: req.params.thoughtId },
                    { $addToSet: { reactions: req.body }},
                    { runValidators: true, new: true }
                );
    
                console.log(1, thought)

                if (!thought) {
                    return res.status(404).json({ message: 'No user found with that ID.'});
                }
    
                
                res.status(200).json(thought);
    
            } catch (err) {
                res.status(500).json(err)
            }
      },
    // update a thought by its id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                res.status(404).json({ message: 'No user with this id!' });
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a thought by its id
    async deleteThought(req, res) {
        try {
          const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
    
          if (!thought) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          
          res.json({ message: 'Thought deleted!' })
        } catch (err) {
          res.status(500).json(err);
        }
      },
    // delete a reaction by reationId
    async deleteReaction(req, res) {
        console.log(req.params)



        try {
            
          const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId }}},
            { runValidators: true, new: true }
          )
          if (!thought) {
            return res.status(404).json({ message: 'No user with that ID' });
          }

          res.json(thought)
        } catch (err) {
          res.status(500).json(err);
        }
      },
}