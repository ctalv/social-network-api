// require connection.js, models, and data
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getUserData, getThoughtData } = require('./data')
// start the seeding runtime timer?

// create a connection to mongodb (async)
connection.once('open', async () => {
    console.log('connected');
    // await all the data to be seeded in the db
    // check and delete database if it exists
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users')
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts')
    }

    console.log(Thought)
    console.log(User)
  
    const thoughts = getThoughtData();
    const users = getUserData(thoughts);

    console.log(users)
    console.log(thoughts)

    await Thought.collection.insertMany(thoughts);
    await User.collection.insertMany(users);

    // log out
    console.info('Seeding complete! 🌱');
    process.exit(0);
});

