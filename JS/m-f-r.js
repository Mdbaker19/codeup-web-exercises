"use strict";


/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number + 1);
// });
//
// console.log(newArray);


// TODO TOGETHER: Let's map through the array of numbers and add 1 to each element. Console log the new copy of the array.
// console.log(numbers.map((n) => n + 1));
let addedNums = numbers.map(n => n + 1);

//TODO: Map through the new array of numbers and this time multiply each element by 3. Console log the new copy.
//map an array of strings to make them all lower case

let words = ["Red", "Happy", "House"];
let lower = words.map((word) => word.toLowerCase());
// console.log(lower);


let newMultNums = addedNums.map(n => n * 3);
// console.log(newMultNums);
//Bonus: Refactor your functions using ES6


/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TODO TOGETHER: Let's filter through our binary and return all the true values. We'll store the new array in a variable named 'ones'
// console.log(binary.filter((x) => x));
let ones = binary.filter(x => x);
// console.log(ones);
// TODO: filter through binary again and this time, return all the false values.
// console.log(binary.filter(x => !x));
//Bonus: Refactor your functions using ES6

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TODO: filter through the array of objects and return all fruit type objects.
let fruits = fruitsAndVeggies.filter(o => o.type === "fruit");
// console.log(fruits);

// TODO: filter through the array of objects and return all vegetable type objects.
let vegetables = fruitsAndVeggies.filter((o) => o.type === "vegetable");
// console.log(vegetables);

/*********************************************
 *              .reduce
 ******************************************** */

const numbersArray = [1, 2, 3, 4, 5];


//accumulation = 0
// add 1
//accumulation = 1
//add 2
//accumulation = 3
//add 3
//accumulation = 6
//add 4
//accumulation = 10
//add 5

// final accumulation = 15


// TODO TOGETHER: Let's reduce our original numbers Array into one single value.
let sum = numbersArray.reduce((a, b) => a + b);
// console.log(sum);
// TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.
let from100 = numbersArray.reduce((a, b)=> (a - b), 100);
// console.log(from100);
const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TODO: Using .reduce, return the total number of apples.
let allApples = shoppingCarts.reduce((sum, content) => {
   return sum + content.apples;
}, 0);

console.log(allApples);
const colors = ['red','orange','red','blue','blue','green','red'];

// TODO: Count the number of times a color appears in this Array. Hint: your initial value should be an empty object.
 const wordCountObject = colors.reduce((count, currentWord) => {
     if(typeof count[currentWord] === "undefined"){
         count[currentWord] = 1;
     }
     else {
         count[currentWord] += 1;
     }
     // console.log(count);
     return count;
 }, {});
 //object chosen as a starting point is to have a property of the color with a value of the count assigned to it

// console.log(wordCountObject);


const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TODO TOGETHER: Using reduce, let's turn this into a string.
let fullLyric = lyrics.reduce((a, b) => `${a} ${b}`);

console.log(fullLyric);

// Bonus: Create an Array of all the unique fur colors! Hint: check out the ES6 'Set' data type.

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

let counter = 0;
const uniqueFurColors = hamsters.reduce((arr, hamster) => {
    hamster.fur.forEach((color) => {
        if(typeof arr[color] === "undefined"){
            counter++;
            arr[color] = `unique Color number ${counter}`;
        }
    });
    return arr;
},{});

console.log(uniqueFurColors);
