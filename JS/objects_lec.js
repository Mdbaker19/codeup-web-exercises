"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */

var rubberDuck = {
    color: "yellow",
    role: "emotional support",
    name: "nemo"
};

/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use Object literal notation.
 */
var myPhone = {
    color: "black",
    name: "baked10e",
    brand: "samsung",
    ringtone: function(){
        alert("ring");
    },
    takePicture: function(){
        alert("Picture taken");
    },
}


/**
 * TODO: Create a new Object and call it 'myMac'. use the constructor.
 */ var myMac = new Object(); //{}
//console.log(myMac); //{}
myMac.color = "silver";
//console.log(myMac.color);
myMac.brand = "apple";
myMac.year = "2019";
myMac.start = function(){
    console.log("welcome");
};
myMac.charge = 100;
console.log(myMac);

/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */
myPhone.model = "S10e";
myPhone.storage = "xxgb";

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */
myMac.size = 16;
/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */
myPhone.owner = {
    firstName: "matthew",
    lastName: "baker"
};

console.log(myPhone);
console.log(myPhone.owner.firstName);//for just first name

myPhone.apps = ["slack", "google", "waze", "chess"];
console.log(myPhone.apps[3]); // chess
myPhone.apps.forEach(function(app){
    console.log(app);
})
/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */
myMac.folders = ["class", "personal", "images", "projects"];
myMac.folders.forEach(function(folder){
    console.log(folder);
});
/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */
myMac.login = {
    userName: "uppity",
    fakePassword: "downity",
    email: "updown@up.down"
}
console.log(myMac.login.email);
console.log(myMac);

/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */
myPhone.call = function (){
    console.log("Dialing...");
}
myPhone.call();
/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */
myMac.powerOn = function (){
    console.log("Powering on...");
}
myMac.powerOn();
/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */
myPhone.id = function (){
    console.log("user is: " + this.owner.firstName + " " + this.owner.lastName);
}
myPhone.id();
/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */
myMac.currentUser = function (){
    console.log("user is: " + this.login.userName + ", email is: " +  this.login.email);
}
myMac.currentUser();

/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/*
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/*
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */
// var chooseYourFighter = [{}, {}, {}, {}];
// var chooseYourFighter = [{
//     name: "spongebob"
// },
//     {
//     name: "patrick"
// },
//     {
//     name: "squidward"
// },
//     {
//     name: "krabs"
// }
// ];
//
// chooseYourFighter.forEach(function(fighter){
//     console.log(fighter.name);
// })

var chooseYourFighter = [{
    name: {
        firstName: "sponge",
        lastName: "square",
        },
    catchPhrase: function (){
        return "Im ready";
    },
    abilities: ["karate", "cook", "bubble blowing", "jelly fish"]
    },
    {
    name: {
        firstName: "patrick",
        lastName: "star"
        },
    catchPhrase: function (){
        return "this is patrick";
        },
    abilities: ["hide", "make noise", "secret photo", "do nothing"]
    },
    {
    name: {
         firstName: "squidward",
         lastName: "tortallini"
        },
    catchPhrase: function (){
        return "sighhhhhhh";
        },
    abilities: ["bad music", "nag", "yell", "sleep"]
    },
    {
    name: {
        firstName: "Eugene",
        lastName: "Krabs"
        },
    catchPhrase: function (){
        return "money!!!"
        },
    abilities: ["ahahah", "take money", "hide money", "order people"]
    },
];

chooseYourFighter.forEach(function(fighter){
    console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
    console.log("their abilities are: ");

    fighter.abilities.forEach(function(ability){
        console.log(ability);
    });
    console.log("- - - - -- - - -  -- -");
});












