// seed data in array format
userData = [
    {
        username: 'ctalv',
        email: 'ctalver99@gmail.com',
    },
    {
        username: 'firebug',
        email: 'firebug@hotmail.com',
    },
    {
        username: 'jasfo_gulse',
        email: 'wjalver2015@gmail.com',
    },
    {
        username: 'chicken2',
        email: 'hayhay@aol.com',
    },
]

thoughtData = [
    {
        thoughtText: 'I am livid! I wanted cereal and we DIDNT HAVE MILK!!',
        createdAt: 'May 7th, 2020 at 3:00 am',
        username: 'chicken2',
        reaction: []
    },
]


const usernames = [
    'ctalv',
    'firebug',
    'jasfo_gulse',
    'chicken2'
]

const emails = [
    'ctalver99@gmail.com',
    'firebug@hotmail.com',
    'wjalver2015@gmail.com',
    'hayhay@aol.com'
]

const thoughts = [
    'I am livid! I wanted cereal and we DIDNT HAVE MILK!!',
    'What a wonderful world we live in!',
    'I have a confession... I DRANK ALL THE MILK!',
    'what is the dealeo with this',
    'Hans Zimmer is BUSSIN',
    'why',
    'ok, now i am done'
]

// data functions
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getThoughtData = () => {
    const results = []; 
    for (let i = 0; i < Math.floor(Math.random() * (99 - 18 + 1) + 18); i++) {
        const user = getRandomArrItem(usernames);
        const thought = getRandomArrItem(thoughts);
      results.push({
        thoughtText: thought,
      });
      thoughts.slice(thoughts.indexOf(thought));
    }
    return results;

}

const getUserData = () => {
    const results = [];
    for (let i = 0; i < usernames.length; i++) {
        const thought = getRandomArrItem(thoughts);
        thoughts.slice(thoughts.indexOf(thought));
      results.push({
        username: usernames[i],
        email: emails[i],
        // thoughts: thought.id,
      });
    }
    return results;
}

const addThoughtData = () => {
    
}


// export data
module.exports = { getUserData, getThoughtData}