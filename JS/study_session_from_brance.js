//The movie problem:
var littleMermaidDay = 3;
var brotherBearDay = 5;
var herculesDay = 1;

console.log((littleMermaidDay + brotherBearDay + herculesDay) * 3);


//work companies amount paid problem:

var fBHours = 10;
var googleHours = 6;
var amznHours = 4;

var fBRate = 350;
var googleRate = 400;
var amznRate = 380;

console.log((fBHours * fBRate) + (googleHours * googleRate) + (amznHours * amznRate));

//Student enroll problem:

//var isClassFull = currentSize <= maxSize, currnent = 20, max = 30 kind of thing
var isClassFull = false;
var isConflict = false;

//if class isnt full and class does not conflict then canEnroll will be true
var canEnroll = !isClassFull && !isConflict;

//Product offer problem:

var itemsBought = 3;
var didBuyTwo = itemsBought > 2;
var expirationDate = "2020-09-30";
var today = "2020-09-25";
var offerApplied = today <= expirationDate;
var isPremium = false;

var canGetDiscount = false;

if(didBuyTwo && offerApplied){
    canGetDiscount = true;
} else if (isPremium && offerApplied){
    canGetDiscount = true;
} else {
    canGetDiscount = false;
}

//password and uswername problem:

var username = "codeup";
var password = "notastrongpassword";

var isFiveChar = (password.length >= 5);
var doesIncludeUn = (password.includes(username)); //password.indexOf(username) === -1
var usernameTooLong = (username.length <= 20);
var noWhiteSpace = ((password.trim() !== password) && (username.trim() !== username));
