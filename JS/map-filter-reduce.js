const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const min3LangUser = users.filter((o) => o.languages.length >= 3);
console.log(min3LangUser);

const emails = users.map((user) => user.email);
console.log(emails);

const totalExp = users.reduce((a, b) => a + b.yearsOfExperience, 0);
console.log(`total years experience is ${totalExp}`);
console.log(`average experience is ${totalExp/users.length}`);

// function longestEmail(arr) {
//     let currentLongest = "";
//     arr.forEach((user) => {
//         if(user.email.length > currentLongest.length){
//             currentLongest = user.email;
//         }
//     });
//     return currentLongest;
// }
//
// console.log(longestEmail(users));

const longestEmail = users.reduce((currentEmail, user) => {
    if(currentEmail.length < user.email.length){
        currentEmail = user.email;
    }
    return currentEmail;
}, "");
console.log(longestEmail);


let startingString = "Your instructors are: ";
const instructors = users.reduce((a, b) => `${a} ${b.name}`, startingString);
console.log(instructors);


const uniqueLang = users.reduce((arr, user) => {
    user.languages.forEach((lang) => {
        if(typeof arr[lang] === "undefined"){
            arr[lang] = "unique";
        }
    });
    return arr;
},{});
console.log(uniqueLang);


//=======other solution=====//
let mySet = new Set();
let allLanguages = users.reduce((currentLanguage, user) => {
    for(let ele of user.languages){
        mySet.add(ele)
    }
    return mySet
}, mySet)
console.log(allLanguages);

