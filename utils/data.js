// seed data in array format
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

// const getThoughtData = () => {
//     const results = []; 
//     for (let i = 0; i < Math.floor(Math.random() * thoughts.length + 1 ); i++) {
//         const thought = getRandomArrItem(thoughts);
//       results.push({
//         thoughtText: thought,
//       });
//       thoughts.slice(thoughts.indexOf(thought));
//     }
//     return results;

// }


// const getUserData = () => {
//     const results = [];
//     for (let i = 0; i < usernames.length; i++) {
//         const thought = getRandomArrItem(thoughts);
//         thoughts.slice(thoughts.indexOf(thought));
//       results.push({
//         username: usernames[i],
//         email: emails[i],
//         // thoughts: thought.id,
//       });
//     }
//     return results;
// }



const getThoughtData = () => {
    const results = [];
    for (let i = 0; i < Math.floor(Math.random() * thoughts.length + 1); i++) {
        const thought = getRandomArrItem(thoughts);
        results.push({
            thoughtText: thought
        });
        thoughts.splice(thoughts.indexOf(thought), 1);
    }
    return results;
};

const getUserData = (thoughts) => {
    const results = [];
    for (let i = 0; i < usernames.length; i++) {
        const thought = getRandomArrItem(thoughts);
        results.push({
            username: usernames[i],
            email: emails[i],
            thoughts: thought
        });
    }
    return results;
};

// export data
module.exports = { getUserData, getThoughtData };

// const getRandomThoughts = (thoughts) => {
//     const randomThoughtsCount = Math.floor(Math.random() * thoughts.length + 1);
//     const randomThoughts = [];
//     const usedIndexes = [];

//     for (let i = 0; i < randomThoughtsCount; i++) {
//         let randomIndex;
//         do {
//             randomIndex = Math.floor(Math.random() * thoughts.length);
//         } while (usedIndexes.includes(randomIndex));

//         usedIndexes.push(randomIndex);
//         randomThoughts.push(thoughts[randomIndex]._id);
//     }

//     return randomThoughts;
// };


// // export data
// module.exports = { getUserData, getThoughtData }