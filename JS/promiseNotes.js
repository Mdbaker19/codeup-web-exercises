// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user);
//         });
//     });
// });
// fetch('https://api.github.com/users').then( response => {
//     response.json().then((data) => data.forEach((one) => {
//         console.log(one.type);
//     }));
// });
//
// console.log("Hello");

// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(users => {
//         users.forEach( userObj => {
//             // do something with each username
//             console.log(userObj.login);
//         })
//     })
//     .catch(error => console.error(error));

// fetch("http://api.github.com/users")
//     .then(response => response.json())
//     .then(users => {
//         users.forEach(user => {
//             console.log(user.id);
//     })
// })
//     .catch(err => console.error("fault " + error));


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let ran = Math.random()
        if (ran > 0.5) {
            resolve();
            console.log(ran);
        } else {
            reject();
            console.log(ran);
        }
    }, 1500);
});

console.log(myPromise); // a pending promise

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));


function makeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 1500);
    });
}

const request = makeRequest();
console.log(request); // pending promise

//REQUEST IS THE PROMISE, MESSAGE IS THE RETURN VALUE FROM THE EITHER RESOLVE OR REJECT SO IT IS CON CATTED INTO THE CONSOLE LOG AS MESSAGE
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"



/*
=========================================

JS PROMISES PROVIDE A CLEANER SYNTAX FOR ASYNCHRONOUS CALL BACKS AND FUNCTIONS

JS promises are a value that represents an asynch action that may be in pending, fulfilled or rejected states
provides syntax that exposes the returned value when fulfilled or rejected
avoids "callback hell" by using flatter syntax

Web dev constantly deals with asynch actions...
    making a request to a RESTful api
    download large assets
    loading the document
    timed actions
    reading and writing files
    etc.....
    frequently used in other libraries

the jqXhr object from jQuery AJAX requests is similar to Promises

Creating and using JS promises
fetch("url").then((this) => { do this} . catch((this) => { if it fails}


What are JS promises?
JS PROMISES PROVIDE A CLEANER SYNTAX FOR ASYNCHRONOUS CALL BACKS AND FUNCTIONS


What are the three states of a promise?
pending: the event has not yet happened.
resolved: the event has happened successfully.
rejected: the event has happened, and an error condition occurred.

Why are they useful?
they provide a way to have functions and fetch requests to run asynchronously in the background without blocking other code from
running

How can a JS promise be ‘handled’?
.then and .catch

What is promise chaining?
when a return value of a promise is treated as a promise, a .then method can be added on to resolve the returned promise

How do JS promises relate to what we have covered at Codeup previously?
to allow AJAX request to resolve more asynchronously

What is the difference between Promise.all() and Promise.race()?
Promise.all: accepts an array of promises, and resolves when all the individual promises have resolved.
Promise.race: accepts an array of promises, and resolves when the first promise resolves

How do promises relate to the Fetch API?
a fetch request returns a promise representing the AJAX request








 */