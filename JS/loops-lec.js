"use strict";
/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }

//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)

// let i = 0;
// while(i < 10){
//     console.log("count up to '10' -- " + i);
//     i++;
// }

//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)

// let i = 20;
// while (i >= 0){
//     console.log("countdown" + i);
//     i--;
// }

//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

// let i = 0;
// while (i <= 20){
//     console.log("count to '20'--" + i);
//     i += 2;
// }

//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)

// let i = 10;
// while(i <= 100) {
//     console.log("count to '100'--" + i);
//     i += 10;
// }

//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)

// let i = 50;
// while(i > 0){
//     console.log("count to '50'---" + i);
//     i--;
// }

//TODO: creat a while loop without numbers:
    // my attempt below, did not work, if no, can not end it with a yes after
    // yes initially will end it
    // need to reassign the confirm
// let check = confirm("would you like to confirm");
// while(check === false){
//     confirm("would you like to confirm");
//     if(check){
//         break;
//     }
// }

// working with Sophia in class, showing how to do it
// let count = 0;
// let addQ = "?";
// let question = confirm("would you like to exit?");
// while(!question){
//     count++
//     question = confirm("would you like to exit?" + addQ.repeat(count));
// }

/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  Code to be run.
// } while (condition)


// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i);
// 	i++;
// }

// TODO TOGETHER: Why doesnt the example above run?
// i is already not less than 10

// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?
// it will log one time with the do
// let i = 0;
// do{
//     console.log("count to '10'--do while loop:" + i);
//     i++;
// }while(i < 10);

//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?" What difference do you notice?

// let question = confirm("would you like for me to repeat this?")
// do{
//     question = confirm("would you like for me to repeat this?")
// }while(question);

//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)

// (0, 2, 4...20)
// let i = 0;
// do{
//     console.log("count to '20'-- do while loop" + i);
//     i += 2;
// }while(i <=20)

//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"

// let correctColor = "blue";
// do{
//     var answer = prompt("What is your favorite color?");
// }while(answer !== correctColor);


/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

//TODO TOGETHER: Explore basic for loop syntax

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);

// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }

// TODO TOGETHER: Why are loops beneficial?
//can easily iterate something a certain amount of times over and over
//prevent redundency and help with time complexity


// TODO TOGETHER: Console.log each color from the array randomColors
//  var randomColors = ["red","orange","yellow","blue","green"]


// for (var i = 0; i < randomColors.length; i++){
// 	console.log(randomColors[i]);;
// }



// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;

// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;

// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.

// for(let i = 0; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){ //could use 15 instead duh i % 15 === 0!!
//         console.log("FizzBuzz");
//     } else if(i % 5 === 0){
//         console.log("Buzz");
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else console.log(i);
// }

/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//     if (i >= 5) {
//         break;
//     } else
//         console.log('Loop counter is: ' + i);
// }

// 	if (i === numberToStopAt) {
// 		console.log('We have reached the stopping point: break!');
// 		// use the break keyword to exit from the while loop
// 		break;
// 		// nothing after the break will get processed
// 		console.log('You will never see this line.');
// 	}
// }


// We can get an iteration to skip using continue;
// for (var i = 1; i < 100; i++) {
//
// 	if (i % 2 !== 0) {
// 		// skipping all odd numbers;
// 		continue;
// 	}
//
// 	console.log('Here is a lovely even number: ' + i);
// }