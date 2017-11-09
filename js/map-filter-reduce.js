const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//-----------------------------------------------------------------------------------//
//
// Use .map
// to create an array of strings
// where each element is a user's email address
//
// Use .filter
// to create an array of user objects
// where each user object has at least 3 languages in the languages array.
//
// Use .reduce
// to transform the array into an object
// where the object's keys are ids and the values are objects that represent each user
//


//.map--------------------------------------------------------------------------------


/*vanilla JS*/
/*var arr = [];

users.forEach(function(user) {
    arr.push(user.email);
});
console.log(arr);*/

const userEmail = users.map(user => user.email);
console.log(userEmail);

// const userEmail = users.map((user) => {
//     return user.email;
// )};
//
// console.log(userEmail);

//.filter--------------------------------------------------------------------------------


/*vanilla JS*/
// var arr = [];
//
// users.forEach(function(user){
//     if (user.languages.length >= 3){
//         arr.push(user);
//     }
// });


// const arr = users.filter((user) => {
//      return (user.languages.length >= 3) ? true : false;
// });
//     -refactoring using .filter ES6 instead ES6


// const arr = users.filter( ({languages}) => {
//     return (languages.length >= 3) ? true : false;
// });
// console.log(arr);
//    -refactoring brought in specific property using curly braces rather than entire object


const arr = users.filter( ({languages}) => {
    return (languages.length >= 3);
});
console.log(arr);
//    -simplified code, removing ternary operation because it's redundant
//    -use ternary if you need to return something other than T/F in order to perform something on it



//.reduce-------------------------------------------------------------------------------



















