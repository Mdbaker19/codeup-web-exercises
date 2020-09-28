"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");
var color = prompt("What is your favorite color? hint: pick blue");
if(color === "blue"){
    alert("Great, " + color + " is my favorite color too");
} else alert("Great " + color + " is a color");

function rentedMovies(){
    var rate = Number(prompt("how much does it cost per day for a movie?"))
    var lm = Number(prompt("How long did you rent little mermaid?"));
    var bb = Number(prompt("How long did you rent brother bear?"));
    var hrc = Number(prompt("how long did you rent hercules?"));
    var total = (lm * rate) + (bb * rate) + (hrc * rate);
    alert("You owe: $" + total);
}

function workPay(){
    var googleHours = Number(prompt("How many hours did you work at google?"));
    var gpay = Number(prompt("what is the pay rate?"));
    var amznHours = Number(prompt("how many hours did you work at amazon?"));
    var apay = Number(prompt("what is the pay rate?"));
    var fbHours = Number(prompt("how many hours did you work at facebok?"));
    var fbpay = Number(prompt("what is the pay rate?"));
    var total = (googleHours * gpay) + (amznHours * apay) + (fbHours * fbpay);
    alert("you made: $" + total);
}

function enroll(){
    var maxClass = Number(prompt("what is the max size of this class"));
    var minClass = Number(prompt("how many people are in the class right now"));
    var conflicts = confirm("does this conflict with your current schedule?");
    if(conflicts || minClass <= maxClass){
        alert("looks like you can not enroll");
    }  else alert("looks good, you can enroll");

}

function productOffer (){
    var offer = confirm("Do you have a valid coupon offer?");
    if(offer){
        var status = confirm("Are you a premium member?");
        var itemAmount = Number(prompt("how many items did you buy?"));
        if(status || itemAmount > 2){
            alert("offer applied");
        } else alert("you do not qualify for offer");
    } else alert("sorry, offer is expired");
}
