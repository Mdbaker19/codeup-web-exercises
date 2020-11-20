/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'matt';
const email = 'matt@matt.matts';
const languages = ["JS", "CSS", "HTML"];

// name = "Matt";

const me = {
  name: "matt",
  email: "matt@matt.matts",
  languages: [
      "JS", "CSS", "HTML"
  ]
}

let p = {...me, work: "bob"};
console.log(p);


// TODO: rewrite the object literal using object property shorthand
let user = {
  name,
  email,
  languages
};
users.push(user);
console.log(users);


// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];




// TODO: rewrite the following using arrow functions
users.forEach((user) => {
  return emails.push(user.email);
});
users.forEach((user) => {
  return names.push(user.name);
});




// TODO: replace `var` with `let` in the following declaration

  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
let developers = [];
//
// users.forEach((user) => {
//   const name = user.name;
//   const email = user.email;
//   const languages = user.languages;
//
// //
// //
// //
//   // TODO: rewrite the assignment below to use template strings
//   developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join(', ')}`);
// });


const generateUser = ({name, email, languages}) => {
  return {
    name,
    email,
    languages
  }
}
users.forEach((user) =>{
  developers.push(generateUser(user));
});

console.log(developers);









// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for(const dev of developers) {

  // TODO: rewrite the assignment below to use template strings
  list += `<li>${dev.name}, ${dev.email}, ${dev.languages}</li>`;
};
list += '</ul>';

document.getElementById("listArea").innerHTML += list;