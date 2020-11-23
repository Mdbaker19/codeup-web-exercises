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












 */