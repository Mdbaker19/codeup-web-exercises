//console.log("hello, we are linked");

//********** Math Methods **********//

//Math.random()-----------

//could be used to randomize colors everyday on your website
// let randomNum = Math.random();
//will be num between 0-1 float value

//-----Math.random() * (max number(when added to min number)) ) + (min number)

let randomNum = Math.random() * 3;
//0.0000000001 - 2.9999999999









// min is excluded
function generateRanWithinRange(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

console.log("CHECKING FOR 300 TOP END");

do{
    let highEnd = generateRanWithinRange(250, 300);
    console.log(highEnd);
}while(highEnd !== 300);// can get 300

console.log("CHECKING FOR 200 BOTTOM END");

do{
    let lowEnd = generateRanWithinRange(250, 300);
    console.log(lowEnd);
}while(lowEnd !== 251);// can not get a 250, causes infinite loop

















//Math.round()------------

Math.round(randomNum)
// 0 , 1 , 2, 3

// 2000 to 3000
// min < chosen < max
// 2000 < chosen < 3000
// Math.random() * (MAX - MIN) + min
let randTwoToThreeThousand = Math.floor(Math.random() * 1001) + 2000


//Math.floor()------------
Math.floor(randomNum);
//rounded down "to the floor" 0, 1, 2

// num between 74 and 186
Math.floor(Math.random() * 113) + 74

// if( num * 2 is > 1){
// round up else round down to 0


//Math.ceil()--------------
Math.ceil(randomNum);
//rounded up "to the ceiling" 1, 2, 3

// num between 74 and 186
Math.ceil(Math.random() * 112) + 74




//Math.pow()---------------
//to raise first to power of second
Math.pow(2, 3);
// output 8

Math.pow(8, 3);
// output 512

Math.pow(4, 2);
// output 16

let base = 8;
let exponent = 6;
let result = base;
for(let i = 1; i < exponent; i++){
    result *= base;
}
//console.log(base + " to the " + exponent + " = " + result);


//Math.sqrt()---------------
Math.sqrt(16);
// output 4

Math.sqrt(64);
// output 8



//********** CONSTANTS *********//

//Math.E, (Euler's number)
// roughly 2.718



//Math.PI
// used to calc circumferance and area of circle from radius or diameter
// circle with dia of 5

let circumferance = Math.PI * 5;

//circle dia 5 so radius is 2.5
let area = Math.PI * Math.pow(2.5, 2);




















