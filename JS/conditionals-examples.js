(function () {
    "use strict";

    console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

    function showNavBar(status) {
        var isAdmin = confirm("Are you an admin?");
        if(isAdmin){
            //display navbar
            console.log("navbar");
        } else console.log("normal site");
    }
    //console.log((showNavBar())); if yes console log navbar will show
//TODO Together: Send a 20% off coupon if its users birthday

    function birthday(day){
        const today = new Date();
        var userBDay = prompt("when is your birthday");
        if(userBDay === today){
            console.log("here is your birthday coupon!! Happy birthday");
        } else console.log("nothing");
    }
    //console.log((birthday()));
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

    function weather(){
        var isRaining = true;
        if(isRaining){
            alert("It is raining!");
        } else alert("Have a nice day");
    }

    //console.log((weather()));

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

    function canBuy() {
        let money = Number(prompt("how much money do you have?"));
        let cost = Number(prompt("how much does the item cost"));
        const canAfford = money >= cost;
        if(canAfford) {
            alert("you have enough money");
        } else alert("you can not afford this");
    }

    //canBuy();


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

    function checkLives(lives){
        let gameOver;
        gameOver = (lives === 0);
        if(gameOver){
            alert("game is over");
        } else console.log("keep playing");
    }

    //console.log(checkLives(2));
    //console.log(checkLives(0));

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

    function isSnow(){
        let snowing = true;
        if(snowing){
            alert("It's snowing");
        } else console.log("Have a nice day");
    }

    //console.log(isSnow());

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

    function compareToTen(num){
        const max = 10;
        if(num > max){
            alert("number is greater than 10");
        } else console.log("number not greater than 10");
    }

    //console.log(compareToTen(8));
    //console.log(compareToTen(11));

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.


// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }


// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

    var roleAdmin = false;

    if(roleAdmin){
        console.log("is admin, display admin navbar");
    } else {
        console.log("regular user, display standard navbar")
    };


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

    var rainyWeather = true;

    if(rainyWeather) {
        console.log("It's raining");
    } else {
        console.log("have a nice day");
    }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

    function checkIfGameOver (numberOfLives){
        if(numberOfLives === 0){
            alert("Sorry, Game over");
        } else alert("Next Level");
    }

        //checkIfGameOver(1);
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

    function isSnowing(weather) {
        if(weather === "snowing"){
            alert("It's snowing");
        } else alert("Check back later for more details");
    }

    //isSnowing("snowing")

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// let numberInput = Number(prompt("what is your number?"));
//     if(numberInput > 10){
//         alert("is number greater than 10? true");
//     } else {
//         alert("the number is less than 10");
//     }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.


// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?");
//     //ok from confirm == true, cancel is false;
// if(weShouldDeleteStuff){
//     //delete everything
//     alert("we are deleting everything");
// }    else {
//     alert("operation cancelled");
// }






//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

    // var age = confirm("Are you older than 13?");
    // if(age){
    //     alert("you may proceed");
    // } else alert("Sorry, you are not able to procced");


// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }


// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

    function whatWeather(currentWeather){
        if(currentWeather === "snowing"){
            alert("It's snowing!");
        } else if(currentWeather === "raining"){
            alert("It's raining");
        } else{
            alert("have a nice day");
        }
    }

//console.log(whatWeather("raining"));

//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function trafficLight(color){
    let isCarInFront = true;
    let carStoppedFirst = true;
    let distanceFromLight = 300; // some current distance reader function that returns a const of current distance???????
    const canGoThrough = distanceFromLight > 50;
    if(color === "green"){
        return ("proceed through intersection")
    } else if (color === "yellow") {
        if (isCarInFront) {
            if (carStoppedFirst) {
                return ("Stop behind stopping vehicle");
            } else return ("Stop before intersection");
        } else {
            if (canGoThrough) {
                return ("you better hurry!!");
            } return ("Stop before intersection");
        }
    }
    else if(color === "red"){
        if(isCarInFront){
            return ("stop behind car in front of you")
        }
        return ("stop before intersection")
    } else return ("not recognized, be careful")
}


console.log(trafficLight("yellow"));

// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

var userAge = 16;
var hasPermit = true;

if(userAge < 15) {
    alert("sorry, not eligible yet");
} else {
    if(userAge === 15) {
        alert("you are eligible for a permit!!")
    } else if( userAge >= 16 && hasPermit) {
        alert("you are eligible for a DL!!")
    } else if(userAge >= 16 && !hasPermit) {
        alert("you need to get a permit first")
    } else {
        //fail safe
        alert("Please call tech support!");
    }
}




// ================ TERNARY STATEMENT ================
    //can be variable

//TODO Together: Regular way

    //(condition) ? if action : else action;
    var success = true;
    let message;
    (success) ? message = "Operation was successful" : message = "Oops, something went wrong"
    console.log(message);
    //or assign ternary to a variable like below line 319 area

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

let weatherMessage;
(weather === "rainy") ? weatherMessage = "It's raining": weatherMessage = "Have a nice day!"
console.log(weatherMessage);
//WRITE YOUR TERNARY STATEMENT HERE!


// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }






//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

switch(weather){
    case "rainy":
        alert("it is raining");
        break;
    case "sunny":
        alert("it is sunny");
        break;
    case "snow":
        alert("it is snowing");
        break;
    default:
        alert("remind me what the weather is right now please");
        break;
}




//TODO: Rewrite the intersection function from earlier as a switch statement.
    var lightColor = "green";

switch (lightColor){
    case "green":
        alert("proceed");
        break;
    case "yellow":
        alert("proceed with caution");
        break;
    case "red":
        alert("stop before intersection");
        break;
}




// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html


})();